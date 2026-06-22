import { useEffect, useRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Image from "next/image";

Dust.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.string,
};

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

// Behaviour of the dust effect (tuned values).
const CONFIG = {
  colorHex: "#ffffff", // grain tint (white tint × brightness ⇒ grey on the dark cover)
  baseGray: 86, // brightness floor (0–255)
  lumInfluence: 0, // extra brightness pulled from the source luminance
  alphaBase: 205, // opacity floor (0–255)
  alphaJitter: 53, // random opacity added per grain
  grainSize: 1, // base grain side in backing px (+0/1 per grain)
  count: 12000, // grain count after thinning the source stipple
  scale: 1.2, // image zoom inside the box
  edgeRandom: 0, // px of random home displacement, growing toward the edges
  stiffness: 0.005, // spring pull toward home (return speed)
  damping: 0.85, // velocity settle per step (gravity-like)
  impulse: 0.02, // click push strength (× dim)
  reach: 0.05, // click push falloff distance (× dim)
  jitter: 0.1, // random chaos added on scatter (× dim)
  scatterMode: "radial", // radial | swirl | random
};
const COLOR = hexToRgb(CONFIG.colorHex);
const MAX_SIDE = 760; // cap the larger backing dimension

// Reconstructs the cover art from grey dust grains on a <canvas>: the grains gather
// into the image on load, a click scatters them, then a spring pulls every grain
// home so the image re-forms (gravity-like settle). Grains that fly past the box
// simply leave the frame — nothing piles up at the edges. A static next/image is
// rendered underneath as the fallback — it stays for reduced motion or until the
// simulation paints its first frame, so there is no flash and no CLS.
export default function Dust({ src, width, height, sizes = "", alt = "", classes = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined; // keep the static image, run nothing
    }

    const ctx = canvas.getContext("2d");
    const hero = canvas.closest(".hero") || canvas;
    const off = document.createElement("canvas");
    const offctx = off.getContext("2d", { willReadFrequently: true });
    const ALPHA_MIN = 24; // ignore near-transparent source pixels

    let cw = 0; // backing width
    let ch = 0; // backing height
    let dim = 0; // reference size for physics magnitudes
    let count = 0;
    let frameId = 0;
    let last = 0;
    let acc = 0;
    let started = false;
    let pixels = null; // reused ImageData written to the canvas each frame

    // Immutable per-grain source data (sampled once) and dynamic state.
    let sx, sy, tone, rx, ry, gj, aj;
    let hx, hy, x, y, vx, vy;

    const source = new window.Image(); // global ctor, not the next/image import
    source.decoding = "async";

    // Backing resolution from the rendered box, dpr-aware, capped, aspect kept.
    function measure() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssW = rect.width || width;
      const cssH = rect.height || height;
      let w = Math.round(cssW * dpr);
      let h = Math.round(cssH * dpr);
      const m = Math.max(w, h);
      if (m > MAX_SIDE) {
        const s = MAX_SIDE / m;
        w = Math.round(w * s);
        h = Math.round(h * s);
      }
      return { w: Math.max(160, w), h: Math.max(160, h) };
    }

    function remapHome() {
      const cx0 = cw / 2;
      const cy0 = ch / 2;
      const half = dim * 0.5;
      for (let i = 0; i < count; i += 1) {
        const ox = (sx[i] - cx0) * CONFIG.scale;
        const oy = (sy[i] - cy0) * CONFIG.scale;
        const w = Math.sqrt(ox * ox + oy * oy) / half; // 0 at centre → ~1 at edge
        const amt = CONFIG.edgeRandom * w * w; // outer grains wander more
        hx[i] = cx0 + ox + rx[i] * amt;
        hy[i] = cy0 + oy + ry[i] * amt;
      }
    }

    function build(intro) {
      const size = measure();
      cw = size.w;
      ch = size.h;
      dim = Math.max(cw, ch);
      canvas.width = cw;
      canvas.height = ch;
      pixels = ctx.createImageData(cw, ch);

      off.width = cw;
      off.height = ch;
      offctx.clearRect(0, 0, cw, ch);
      offctx.drawImage(source, 0, 0, cw, ch);
      const data = offctx.getImageData(0, 0, cw, ch).data;

      // The source is a faint, dark stipple, so weight the keep odds by each
      // pixel's "lit ink" (luminance × alpha): grains land where the image is
      // bright and thin out into its shadows. Expected kept count ≈ CONFIG.count.
      let weight = 0;
      for (let i = 0; i < data.length; i += 4) {
        const a = data[i + 3];
        if (a <= ALPHA_MIN) continue;
        const lum = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        weight += lum * a;
      }
      const keep = weight > 0 ? CONFIG.count / weight : 0;
      const cap = Math.ceil(CONFIG.count * 1.4) + 32;

      sx = new Float32Array(cap);
      sy = new Float32Array(cap);
      tone = new Uint8Array(cap);
      rx = new Float32Array(cap);
      ry = new Float32Array(cap);
      gj = new Uint8Array(cap);
      aj = new Uint8Array(cap);
      hx = new Float32Array(cap);
      hy = new Float32Array(cap);
      x = new Float32Array(cap);
      y = new Float32Array(cap);
      vx = new Float32Array(cap);
      vy = new Float32Array(cap);

      let n = 0;
      for (let p = 0, i = 0; i < data.length && n < cap; p += 1, i += 4) {
        const a = data[i + 3];
        if (a <= ALPHA_MIN) continue;
        const lum = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        if (Math.random() > lum * a * keep) continue;

        sx[n] = p % cw;
        sy[n] = (p / cw) | 0;
        tone[n] = lum | 0;
        rx[n] = Math.random() * 2 - 1;
        ry[n] = Math.random() * 2 - 1;
        gj[n] = Math.random() < 0.5 ? 0 : 1;
        aj[n] = (Math.random() * 255) | 0;
        n += 1;
      }
      count = n;

      remapHome();
      for (let i = 0; i < count; i += 1) {
        if (intro) {
          x[i] = Math.random() * cw; // gather in from a random scatter
          y[i] = Math.random() * ch;
        } else {
          x[i] = hx[i];
          y[i] = hy[i];
        }
        vx[i] = 0;
        vy[i] = 0;
      }
    }

    function scatterAt(px0, py0) {
      if (!started) return;
      const impulse = dim * CONFIG.impulse;
      const reach = dim * CONFIG.reach;
      const jitter = dim * CONFIG.jitter;
      const mode = CONFIG.scatterMode;
      for (let i = 0; i < count; i += 1) {
        const dx = x[i] - px0;
        const dy = y[i] - py0;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.0001;
        const f = impulse / (1 + d / reach); // closer grains get the bigger kick
        let ax;
        let ay;
        if (mode === "swirl") {
          ax = (-dy / d) * f;
          ay = (dx / d) * f;
        } else if (mode === "random") {
          ax = (Math.random() - 0.5) * impulse * 2;
          ay = (Math.random() - 0.5) * impulse * 2;
        } else {
          ax = (dx / d) * f;
          ay = (dy / d) * f;
        }
        vx[i] += ax + (Math.random() - 0.5) * jitter;
        vy[i] += ay + (Math.random() - 0.5) * jitter;
      }
    }

    function simulate() {
      const k = CONFIG.stiffness;
      const damp = CONFIG.damping;
      const idle = dim * 0.0005; // faint drift so resting dust stays alive
      for (let i = 0; i < count; i += 1) {
        vx[i] = (vx[i] + (hx[i] - x[i]) * k + (Math.random() - 0.5) * idle) * damp;
        vy[i] = (vy[i] + (hy[i] - y[i]) * k + (Math.random() - 0.5) * idle) * damp;
        x[i] += vx[i];
        y[i] += vy[i];
      }
    }

    function render() {
      const data = pixels.data;
      data.fill(0);
      const { r: cr, g: cg, b: cb } = COLOR;
      const base = CONFIG.baseGray;
      const lumInf = CONFIG.lumInfluence;
      const aBase = CONFIG.alphaBase;
      const aJit = CONFIG.alphaJitter;
      const gSize = CONFIG.grainSize;
      for (let i = 0; i < count; i += 1) {
        const px = x[i] | 0;
        const py = y[i] | 0;
        const g = gSize + gj[i];
        let f = (base + (tone[i] / 255) * lumInf) / 255;
        if (f > 1) f = 1;
        const v0 = (cr * f) | 0;
        const v1 = (cg * f) | 0;
        const v2 = (cb * f) | 0;
        let a = aBase + (aj[i] / 255) * aJit;
        if (a > 255) a = 255;
        a |= 0;
        for (let dy = 0; dy < g; dy += 1) {
          const yy = py + dy;
          if (yy < 0 || yy >= ch) continue; // grains past the box just leave the frame
          const row = yy * cw;
          for (let dx = 0; dx < g; dx += 1) {
            const xx = px + dx;
            if (xx < 0 || xx >= cw) continue;
            const o = (row + xx) * 4;
            data[o] = v0;
            data[o + 1] = v1;
            data[o + 2] = v2;
            data[o + 3] = a;
          }
        }
      }
      ctx.putImageData(pixels, 0, 0);
    }

    const STEP = 1000 / 60;
    function frame(now) {
      frameId = requestAnimationFrame(frame);
      if (!last) last = now;
      let elapsed = now - last;
      last = now;
      if (elapsed > 100) elapsed = 100; // ignore tab-switch gaps
      acc += elapsed;
      let steps = 0;
      while (acc >= STEP && steps < 4) {
        simulate();
        acc -= STEP;
        steps += 1;
      }
      render();
    }

    function play() {
      if (frameId) return;
      last = 0;
      frameId = requestAnimationFrame(frame);
    }
    function pause() {
      if (!frameId) return;
      cancelAnimationFrame(frameId);
      frameId = 0;
    }

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const next = measure();
        if (next.w !== cw || next.h !== ch) build(false); // re-sample, no replay
      }, 160);
    };
    const onPointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      scatterAt(
        ((event.clientX - rect.left) / rect.width) * cw,
        ((event.clientY - rect.top) / rect.height) * ch
      );
    };

    const intersection = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : pause()),
      { threshold: 0 }
    );
    const resize = new ResizeObserver(onResize);

    source.onload = () => {
      build(true);
      started = true;
      play();
      intersection.observe(canvas);
      resize.observe(canvas);
    };
    source.src = src;
    hero.addEventListener("pointerdown", onPointer);

    return () => {
      pause();
      clearTimeout(resizeTimer);
      intersection.disconnect();
      resize.disconnect();
      hero.removeEventListener("pointerdown", onPointer);
      source.onload = null;
    };
  }, [src, width, height]);

  return (
    <>
      <Image
        className={cn("hero_art", classes)}
        src={src}
        width={width}
        height={height}
        sizes={sizes}
        alt={alt}
        aria-hidden={alt ? undefined : "true"}
        priority
      />
      <canvas
        ref={canvasRef}
        className={cn("hero_art dust", classes)}
        width={width}
        height={height}
        aria-hidden="true"
      />
    </>
  );
}

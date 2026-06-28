import { useCallback, useEffect, useRef, useState } from "react";

export default function useCarousel() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollByStep = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector(".work_slide");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = (slide ? slide.offsetWidth : track.clientWidth) + gap;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollBy({
      left: step * direction,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  return { trackRef, atStart, atEnd, sync, scrollByStep };
}

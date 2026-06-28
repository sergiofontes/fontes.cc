import { useCallback, useRef, useState } from "react";

export default function useSetupCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    const slide = track.querySelector(".solution_slide");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return (slide ? slide.offsetWidth : track.clientWidth) + gap;
  }, []);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / step()));
  }, [step]);

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      track.scrollTo({
        left: step() * index,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [step],
  );

  return { trackRef, active, sync, goTo };
}

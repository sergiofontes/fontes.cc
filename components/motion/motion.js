import { useEffect } from "react";

// Page-level controller: each `.reveal` group reveals its `.reveal_item` mockups
// the first time it scrolls into view, staggered per item via `--i`. The motion is
// defined in motion.scss (the `--mk-*` custom properties, with the tuned values as
// var() fallbacks); the What section pins its own values locally. Skipped under
// reduced motion (mockups render in place).
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const groups = [...document.querySelectorAll(".reveal")];
    if (!groups.length) return undefined;

    const observers = groups.map((group) => {
      group
        .querySelectorAll(".reveal_item")
        .forEach((item, i) => item.style.setProperty("--i", i));
      group.classList.add("-ready");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            group.classList.add("-in");
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(group);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return null;
}

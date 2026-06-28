import { useEffect } from "react";

// See AGENTS.md › Reveal animation.
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const groups = [...document.querySelectorAll(".motion")];
    if (!groups.length) return undefined;

    const observers = groups.map((group) => {
      group
        .querySelectorAll(".motion_item")
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

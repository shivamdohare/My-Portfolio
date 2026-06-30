import React, { useEffect, useRef, useState } from "react";

/**
 * Reveal — fades + lifts its children into view the first time they enter
 * the viewport. Pure IntersectionObserver, no dependencies. Honors
 * prefers-reduced-motion by rendering fully visible from the start.
 *
 * `delay` (ms) lets callers stagger siblings for a cascading entrance.
 */
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

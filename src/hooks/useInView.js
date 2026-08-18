import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Reports when an element first scrolls into view, then stops observing —
 * reveals are one-shot, so there is no reason to keep the observer alive or
 * to re-animate content the visitor has already seen.
 *
 * Returns [ref, inView]. When the visitor has asked for reduced motion this
 * reports true immediately, so content is never gated behind an animation
 * that will not run.
 */
const useInView = ({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (inView) return;

    const el = ref.current;
    // No element, or a browser without IntersectionObserver: show the content
    // rather than leaving it invisible forever.
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;

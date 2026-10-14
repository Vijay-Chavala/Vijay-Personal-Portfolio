import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Page-level scroll chrome, mounted once inside the Router:
 *  - resets scroll to the top on navigation (React Router keeps the old
 *    offset, so following a link from the footer of one page landed you
 *    part-way down the next),
 *  - a thin reading-progress bar along the top edge,
 *  - a back-to-top button once the visitor is a screen or so down.
 *
 * Progress is written straight to a CSS variable from a rAF-throttled
 * listener rather than through React state, so scrolling never re-renders.
 */
const ScrollExtras = () => {
  const { pathname } = useLocation();
  const barRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      barRef.current?.style.setProperty("--progress", progress.toFixed(4));
      setShowTop(window.scrollY > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <>
      <div ref={barRef} className="scrollProgress" aria-hidden="true" />
      <button
        type="button"
        className={`backToTop ${showTop ? "backToTopVisible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </button>
    </>
  );
};

export default ScrollExtras;

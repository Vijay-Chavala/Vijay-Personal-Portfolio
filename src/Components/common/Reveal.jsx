import React, { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";

const VARIANTS = {
  up: "revealUp",
  left: "revealLeft",
  right: "revealRight",
  scale: "revealScale",
};

/**
 * Fades and slides its children in the first time they scroll into view.
 *
 * <Reveal delay={120}>…</Reveal>          one element
 * <Reveal as="li" variant="left">…</Reveal>  pick the element and direction
 *
 * `delay` staggers siblings — pass index * 90 when mapping over a list.
 * Styles live in index.css so the animation is shared, not re-declared.
 */
const Reveal = ({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  ...rest
}) => {
  const [ref, inView] = useInView();
  const [settled, setSettled] = useState(false);

  // Mark the entrance finished once its transition has run.
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setSettled(true), delay + 700);
    return () => clearTimeout(timer);
  }, [inView, delay]);

  // Once the entrance has played, step out of the way entirely: drop the
  // reveal classes and the stagger delay. Otherwise an element that is both
  // a Reveal and a hover card (e.g. <Reveal className={styles.Card}>) keeps
  // the 620ms reveal transition plus its delay, and every hover lags.
  const classes = (
    settled
      ? [className]
      : ["reveal", VARIANTS[variant] ?? VARIANTS.up, inView ? "isVisible" : "", className]
  )
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes || undefined}
      style={delay && !settled ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

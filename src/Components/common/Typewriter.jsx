import React, { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Types each phrase out, holds it, deletes it, and moves to the next.
 *
 * Screen readers get the full list once via a visually-hidden span; the
 * animated text is aria-hidden so it is not announced letter by letter.
 * With reduced motion the first phrase is shown statically.
 */
const Typewriter = ({ phrases, typeSpeed = 70, deleteSpeed = 38, hold = 1600 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(() => (prefersReducedMotion() ? phrases[0] : ""));
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const phrase = phrases[index % phrases.length];

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === phrase) delay = hold;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, hold]);

  return (
    <>
      <span className="visually-hidden">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="typeCaret" />
      </span>
    </>
  );
};

export default Typewriter;

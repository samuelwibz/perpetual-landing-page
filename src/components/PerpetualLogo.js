import React, { useEffect, useState } from "react";
import "./PerpetualLogo.css";

const PerpetualLogo = ({ onAnimationComplete }) => {
  const [activeCursorIndex, setActiveCursorIndex] = useState(-1);
  const [stopCursorBlink, setStopCursorBlink] = useState(false);

  useEffect(() => {
    // Set up a timer to update the position
    const interval = setInterval(() => {
      setActiveCursorIndex((prev) => prev + 1);
    }, 100); // Adjust the speed of typing here

    // Stop the interval after all letters are revealed
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setStopCursorBlink(true);
      setActiveCursorIndex(11);

      const finalBlinkTimeout = setTimeout(() => {
        onAnimationComplete();
      }, 1000);

      return () => clearTimeout(finalBlinkTimeout);
    }, 1000); // Adjust to match the total duration of the reveal animations

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onAnimationComplete]);

  return (
    <div className="logo-container">
      <h1 className="logo">
        {["P", "e", "r", "p", "e", "t", "u", "a", "l"].map((char, index) => (
          <span key={index} className="letter">
            {char}
            {activeCursorIndex === index && <span className="cursor blink">|</span>}
          </span>
        ))}
        {stopCursorBlink && <span className="cursor final-blink">|</span>}
      </h1>
      <h2 className="subtitle">A new way to study</h2>
    </div>
  );
};

export default PerpetualLogo;

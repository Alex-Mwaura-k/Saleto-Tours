import React, { useState, useEffect, useRef } from "react";

const CountUpNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false); // Ensure it only runs once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Start animation only when visible and hasn't run yet
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTimestamp = null;
          // Animation loop function
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );

            // Calculate current number based on progress time
            setCount(Math.floor(progress * end));

            // Continue if not finished
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          // Start the animation loop
          window.requestAnimationFrame(step);
          observer.unobserve(entry.target); // Cleanup observer
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [end, duration]);

  // Helper to format numbers (e.g., 10000 -> 10,000) if needed,
  // though for "10k" we will pass raw numbers and suffixes.
  // For simple integers:
  const displayCount = count.toLocaleString();

  // Determine what to render based on input props to match previous design (e.g. 10k+)
  let renderedValue = displayCount;
  if (end === 10000 && suffix === "+") {
    renderedValue = Math.floor(count / 1000) + "k";
  }

  return (
    <span ref={countRef}>
      {renderedValue}
      {suffix}
    </span>
  );
};

export default CountUpNumber;

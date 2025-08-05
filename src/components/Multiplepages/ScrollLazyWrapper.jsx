// components/ScrollLazyWrapper.jsx
import React, { useEffect, useRef, useState, Suspense } from "react";

const ScrollLazyWrapper = ({ children }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Load only once
        }
      },
      {
        threshold: 0.2, // Adjust if needed
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? <Suspense fallback={<div className="lazy-loader">Loading...</div>}>{children}</Suspense> : null}
    </div>
  );
};

export default ScrollLazyWrapper;

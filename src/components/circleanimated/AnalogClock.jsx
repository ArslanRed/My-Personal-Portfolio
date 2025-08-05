import React, { useEffect, useRef } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const second = now.getSeconds();
      const minute = now.getMinutes();
      const hour = now.getHours() % 12;

      secondRef.current.style.transform = `rotate(${second * 6}deg)`;
      minuteRef.current.style.transform = `rotate(${minute * 6 + second * 0.1}deg)`;
      hourRef.current.style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-face">
        {/* Clock numbers 1 to 12 */}
     {Array.from({ length: 12 }, (_, i) => {
  const number = i + 1;                      // 1 to 12
  const angle = (number % 12) * 30+270;          // 30° per number
  return (
    <div
      key={number}
      className="clock-number"
      style={{
        transform: `rotate(${angle}deg) translate(64px) rotate(-${angle}deg)`,
      }}
    >
      {number}
    </div>
  );
})}


        {/* Clock hands */}
        <div ref={hourRef} className="hand hour"></div>
        <div ref={minuteRef} className="hand minute"></div>
        <div ref={secondRef} className="hand second"></div>
        <div className="center-dot"></div>
      </div>
    </div>
  );
};

export default AnalogClock;

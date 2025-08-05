import React, { useRef, useEffect } from 'react';
import './HowItWorks.css';



const HowItWorks = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="how-wrapper">
      <div className="how-frame-container">
        <div className="how-image-wrapper">
          <img src='/frame.png' alt="frame" className="how-frame-image" />
        </div>
        <div className="hiw-video">
          <video
            className="hiw-video-element"
            playsInline
            preload="none"
            autoPlay
            muted
            loop
            ref={videoRef}
          >
            <source src='/frame.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
     
    </div>
  );
};

export default HowItWorks;

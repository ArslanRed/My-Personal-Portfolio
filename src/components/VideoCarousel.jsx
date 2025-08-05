import { useRef, useState, useEffect } from "react";
import { highLightsSlides } from "./highLightsSlides";
import { replayImg } from "../assets";
import "./VideoCarousel.css";

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highLightsSlides.length);
  };

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // At least 50% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Control playback based on visibility
  useEffect(() => {
    const video = videoRefs.current[0];
    if (video) {
      if (isVisible) {
        video.play().catch((err) => {
          if (err.name !== "AbortError") {
            console.error("Play error:", err);
          }
        });
      } else {
        video.pause();
      }
    }
  }, [isVisible, currentIndex]);

  const currentSlide = highLightsSlides[currentIndex];
  const nextIndex = (currentIndex + 1) % highLightsSlides.length;
  const nextSlide = highLightsSlides[nextIndex];

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="video-wrapper">
        <div className="slides-container">
          {[currentSlide, nextSlide].map((slide, i) => {
            const isCurrent = i === 0;
            return (
              <video
                key={slide.id}
                ref={(el) => (videoRefs.current[i] = el)}
                src={slide.video}
                className={isCurrent ? "active" : "preload"}
                muted
                playsInline
                autoPlay={isCurrent}
                preload={isCurrent ? "auto" : "metadata"}
                onEnded={handleVideoEnd}
              />
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <div style={{ marginRight: "auto" }}>
          <button onClick={handleRestart} className="restart-button">
            <img src={replayImg} alt="Restart" />
            Restart Slider
          </button>
        </div>

        <div className="dots-container">
          {highLightsSlides.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;

import React, { useState, useEffect, lazy, Suspense } from "react";
import ButtonGradient from "../button/ButtonGradient.jsx";
import ScrollLazyWrapper from "../Multiplepages/ScrollLazyWrapper.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import "./Project.css";

// Lazy-loaded components
const ImageSlider = lazy(() => import("../imageslider/ImageSlider.jsx"));
const PersonalCheff = lazy(() => import("../cheff/PersonalCheff.jsx"));
const TravelJournal = lazy(() => import("../traveljournal/TravelJournal.jsx"));
const VideoCarousel = lazy(() => import("../VideoCarousel.jsx"));
const MovingCard = lazy(() => import("../Cards/MovingCard.jsx"));
const Windowmain = lazy(() => import("../window/Windowmain.jsx"));
const StyleComponents = lazy(() => import("../circleanimated/StyleComponents.jsx"));
const Pages = lazy(() => import("../pages/Pages.jsx"));

const fallback = (
  <div className="lazy-loader">
    <div className="spinner" />
    <p>Loading...</p>
  </div>
);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`projects-container fade-in ${isVisible ? "visible" : ""}`}>
      <div className="smallscreen">
        <ButtonGradient />
        
        {[ImageSlider, PersonalCheff, TravelJournal, Windowmain, StyleComponents, Pages].map((Component, index) => (
          <ScrollLazyWrapper key={index}>
            <ErrorBoundary>
              <Suspense fallback={fallback}>
                <Component />
              </Suspense>
            </ErrorBoundary>
          </ScrollLazyWrapper>
        ))}

        <ScrollLazyWrapper>
          <ErrorBoundary>
            <Suspense fallback={fallback}>
              <div className="video-card">
                <VideoCarousel />
                <MovingCard />
              </div>
            </Suspense>
          </ErrorBoundary>
        </ScrollLazyWrapper>
      </div>
    </section>
  );
};

export default Projects;

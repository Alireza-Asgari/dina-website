"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Video() {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentVideoRef = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          setShowVideo(false);
        }
      },
      { threshold: 0.1 }
    );

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (showVideo) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [showVideo]);
  return (
    <>
      <div className="w-full h-full bg-red-50 relative">
        <video
          className="w-full h-full object-contain pointer-events-auto z-30 aspect-video"
          ref={videoRef}
          controls={showVideo}
          preload={showVideo ? "auto" : "none"}
          muted={!showVideo}
          poster="/products/grid-1.png"
          onPause={() => setShowVideo(false)}
          onEnded={() => setShowVideo(false)}
          onPlay={() => setShowVideo(true)}
        >
          <source src="/products/help-desk.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {!showVideo && (
        <button
          onClick={() => setShowVideo(true)}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 sm:w-32 sm:h-32 cursor-pointer bg-primary-300 rounded-full flex justify-center items-center z-20"
        >
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-8 sm:w-9 sm:h-11 translate-x-1 pointer-events-none"
          >
            <path
              d="M34.2773 16.8231C37.6107 18.7476 37.6107 23.5588 34.2773 25.4833L7.54266 40.9186C4.20932 42.8431 0.0426539 40.4375 0.0426541 36.5885L0.0426554 5.71793C0.0426556 1.86892 4.20932 -0.536705 7.54266 1.3878L34.2773 16.8231Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </>
  );
}

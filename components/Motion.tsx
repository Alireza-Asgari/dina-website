"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
export default function Motion({ src }: { src: string }) {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // if (videoRef.current) {
          // videoRef.current.play();
          // }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
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
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center "
    >
      <motion.div
        className={clsx(
          "bg-cover bg-no-repeat relative overflow-clip  [--height-from:200px] [--width-from:200px] [--height-to:183px] [--width-to:325px] sm:[--height-from:300px] sm:[--width-from:300px] sm:[--height-to:280px] sm:[--width-to:520px] md:[--height-from:300px] md:[--width-from:300px] md:[--height-to:360px] md:[--width-to:640px] xl:[--height-from:400px] xl:[--width-from:400px] xl:[--height-to:450px] xl:[--width-to:800px] flex justify-center items-center border-2 border-primary-300 dark:border-gray-500 ",
          !showVideo && "video-poster"
        )}
        variants={{
          active: {
            width: "var(--width-to)",
            height: "var(--height-to)",
            borderRadius: "20px",
          },
          inActive: {
            borderRadius: "50%",
            width: "var(--width-from)",
            height: "var(--height-from)",
            x: "100%",
            rotate: 360,
            opacity: 0,
            transition: {
              duration: 5,
            },
          },
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.8,
          },
        }}
        viewport={{ amount: 0.2, once: true }}
        initial="inActive"
        animate={showVideo ? "active" : "inactive"}
      >
        {showVideo ? (
          <video
            className="w-full h-full object-cover pointer-events-auto z-30 "
            ref={videoRef}
            controls={showVideo}
            preload={showVideo ? "auto" : "none"}
            muted={!showVideo}
            poster="/products/grid-1.png"
            // onPause={() => setShowVideo(false)}
            onEnded={() => setShowVideo(false)}
            onPlay={() => setShowVideo(true)}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="w-16 h-16 sm:w-32 sm:h-32 cursor-pointer bg-primary-300 rounded-full flex justify-center items-center z-20"
            onClick={() => setShowVideo(true)}
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
          </div>
        )}
        {!showVideo && (
          <div className="bg-[#C4C4C4] w-full h-full object-cover absolute top-0 left-0 z-10 opacity-60" />
        )}
      </motion.div>
      {!showVideo && (
        <motion.div
          exit={{ opacity: 100 }}
          className="absolute bottom-0 right-1/2 translate-x-1/2 pointer-events-none z-20"
        >
          <svg
            width="586"
            height="190"
            viewBox="0 0 586 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.38869 0.868798C64.7522 89.6715 217.402 249.401 382.67 135.403C399.683 123.668 424.119 81.6669 417.966 60.7096C405.607 18.6121 324.644 58.8584 407.866 139.267C491.089 219.676 560.556 183.046 584.887 154.68"
              stroke="url(#paint0_linear_47_1226)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_47_1226"
                x1="316.059"
                y1="15.364"
                x2="257.203"
                y2="175.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6C016B" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { scrollY } = useScroll();

  // Adjusted parallax transforms to prevent background exposure
  const videoY = useTransform(scrollY, [0, 1000], [0, -100]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.6, 0.9]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log("Video loaded successfully");
  };

  const handleVideoError = () => {
    setVideoError(true);
    console.error("Video failed to load");
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const tryPlayVideo = async () => {
    const video = document.getElementById("hero-video-mobile");
    if (video) {
      try {
        if (video.paused) {
          await video.play();
          setVideoPlaying(true);
        } else {
          video.pause();
          setVideoPlaying(false);
        }
      } catch (error) {
        console.log("Video control prevented:", error);
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white">
      {/* Background Video with Parallax */}
      {!videoError && !isMobile && (
        <motion.video
          id="hero-video"
          className="absolute top-0 left-0 z-0 object-cover w-screen min-h-[120vh]"
          style={{
            y: videoY,
            top: "-10vh",
            opacity: videoLoaded ? 1 : 0,
            left: 0,
            right: 0,
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={handleVideoLoad}
          onPlay={handleVideoPlay}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}

      {/* Mobile Video - User initiated */}
      {!videoError && isMobile && (
        <motion.video
          id="hero-video-mobile"
          className="absolute top-0 left-0 z-0 object-cover w-screen min-h-[120vh]"
          style={{
            y: videoY,
            top: "-10vh",
            opacity: videoLoaded && videoPlaying ? 1 : 0,
            left: 0,
            right: 0,
          }}
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onPlay={handleVideoPlay}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}

      {/* Fallback background while video loads or if it fails */}
      {(!videoLoaded || videoError || (isMobile && !videoPlaying)) && (
        <motion.div
          className="absolute top-0 left-0 z-0 w-screen min-h-[120vh]"
          style={{ y: videoY, top: "-10vh", left: 0, right: 0 }}
        >
          {/* Hero Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url('/images/hero-background.jpg')",
            }}
          />

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/70 to-black/80" />

          {/* Pattern Overlay for visual texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        </motion.div>
      )}

      {/* Video Overlay with Dynamic Opacity */}
      <motion.div
        className="absolute top-0 left-0 z-10 w-screen h-full"
        style={{ opacity: overlayOpacity, left: 0, right: 0 }}
      />

      {/* Mobile Play/Pause Control - Bottom Right */}
      {isMobile && videoLoaded && (
        <motion.div
          className="absolute z-20 flex items-center justify-center w-12 h-12 bg-black rounded-full cursor-pointer bg-opacity-60 bottom-10 right-6"
          onClick={(e) => {
            e.stopPropagation();
            tryPlayVideo();
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            tryPlayVideo();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {videoPlaying ? (
            // Pause Icon - Centered
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            // Play Icon - Centered with slight offset for visual balance
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ marginLeft: "1px" }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.div>
      )}

      {/* Main content with Parallax */}
      <motion.div
        className="relative z-30 max-w-4xl px-6 text-center"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.h1
            className="mb-4 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Tirupati Security Services
          </motion.h1>

          <motion.div
            className="w-24 h-1 mx-auto mb-6 bg-yellow-400"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <motion.p
          className="mb-8 text-base leading-relaxed text-gray-100 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Expert security solutions designed to safeguard what matters most.
          <br />
          Trusted protection around the clock.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <motion.button
            className="px-4 py-1 text-base font-bold text-gray-800 bg-yellow-500 shadow-lg rounded-3xl hover:bg-yellow-400"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={scrollToContact}
          >
            Get Quote
          </motion.button>

          <motion.button
            className="px-4 py-1 text-base font-bold transition-colors border-2 border-white rounded-3xl hover:bg-white hover:text-blue-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={scrollToServices}
          >
            Our Services
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with Fade Effect */}
      <motion.div
        className="absolute z-30 flex flex-col items-center bottom-4 md:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.8, delay: scrolled ? 0 : 2 }}
      >
        <span className="mb-2 text-sm text-gray-400">Scroll down</span>
        <motion.div
          className="flex justify-center w-6 h-10 border-2 border-gray-400 rounded-full"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 mt-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

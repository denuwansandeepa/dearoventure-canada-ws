"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/hero1.png",
    label: "FINANCIAL GROWTH",
    title: "Build Wealth With Confidence. ",
    subtitle:
      "Trusted financial solutions designed to secure your future and grow your opportunities.",
    align: "right ",
  },
  {
    image: "/images/hero2.png",
    label: "INVESTMENT SUPPORT",
    title: "Empowering Sri Lanka’s Economy",
    subtitle:
      "We provide strategic financial support for individuals and businesses to grow sustainably.",
    align: "left",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];
  const isLeft = slide.align === "left";

  return (
    <section className="relative w-full h-[90vh] mt-20 overflow-hidden bg-black flex items-center">

      {/* BACKGROUND LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.8, 0.25, 1] }}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* DARK + CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)]" />

      {/* CONTENT WRAPPER */}
      <div
        className={`relative z-10 w-full max-w-6xl px-6 ${
          isLeft ? "mr-auto text-left" : "ml-auto text-right"
        }`}
      >

        {/* TEXT ANIMATION GROUP */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
              exit: {
                transition: {
                  staggerChildren: 0.08,
                  staggerDirection: -1,
                },
              },
            }}
          >

            {/* LABEL */}
            <motion.p
              variants={{
                hidden: { opacity: 0, x: isLeft ? -30 : 30 },
                show: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: isLeft ? -20 : 20 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sm tracking-[0.25em] text-red-400 uppercase mb-4"
            >
              {slide.label}
            </motion.p>

            {/* TITLE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
            >
              {slide.title}
            </motion.h1>

           <motion.p
  variants={{
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }}
  transition={{ duration: 0.7 }}
  className={`mt-5 text-lg text-gray-200 max-w-xl ${
    isLeft ? "text-left" : "text-right ml-auto"
  }`}
>
  {slide.subtitle}
</motion.p>

            {/* CTA BUTTON */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                show: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
              }}
              transition={{ duration: 0.6 }}
              className={`mt-10 ${isLeft ? "text-left" : "text-right"}`}
            >
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 15px 40px rgba(255,0,0,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-md font-semibold transition-all"
              >
                Explore More
              </motion.button>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* GLOW EDGE EFFECT */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_120px_rgba(0,0,0,0.9)]" />
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

const slides = [
  {
    image: "/images/hero1.png",
    label: "GLOBAL VENTURE CAPITAL & FINANCIAL GROWTH",
    title: "Build Wealth With Confidence.",
    subtitle:
      "Strategic financial solutions and venture investments by Dearo Venture Canada Ltd designed to secure your future and accelerate business growth.",
    align: "right",
  },
  {
    image: "/images/hero2.png",
    label: "INVESTMENT & STRATEGIC ADVISORY",
    title: "Empowering Sustainable Growth",
    subtitle:
      "We provide strategic venture backing, debt financing, and capital advisory for individuals, SMEs, and high-growth enterprises.",
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
    <section className="relative w-full h-[calc(100vh-52px)] min-h-[480px] sm:min-h-[580px] max-h-[780px] mt-[48px] sm:mt-[52px] overflow-hidden bg-slate-950 flex items-center">
      {/* BACKGROUND LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
      </AnimatePresence>

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div
          className={`max-w-2xl ${
            isLeft ? "mr-auto text-left" : "ml-auto text-left sm:text-right"
          }`}
        >
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
                    staggerChildren: 0.1,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.06,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {/* LABEL */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: isLeft ? -25 : 25 },
                  show: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: isLeft ? -15 : 15 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-bold tracking-widest text-red-400 uppercase mb-3 sm:mb-4 bg-red-950/50 px-3 py-1 rounded-full border border-red-500/20"
              >
                <Globe className="w-3.5 h-3.5" />
                {slide.label}
              </motion.p>

              {/* TITLE */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -15 },
                }}
                transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight"
              >
                {slide.title}
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTA BUTTON */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                }}
                transition={{ duration: 0.5 }}
                className={`mt-6 sm:mt-8 ${
                  isLeft ? "text-left" : "text-left sm:text-right"
                }`}
              >
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/30 text-xs sm:text-sm md:text-base group"
                >
                  Explore Dearo Venture Canada
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* SLIDE INDICATOR DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-red-500"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* GLOW EDGE EFFECT */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_100px_rgba(0,0,0,0.85)]" />
    </section>
  );
}
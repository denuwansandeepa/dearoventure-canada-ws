"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Workflow,
  Goal,
  Award,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const awardsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    awardsRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    awardsRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  const awards = [
    {
      title: "Iconic Global Awards 2024",
      desc: "Best Venture Investment Provider & Excellence in Customer Trust.",
      img: "/images/awards/AW5.jpg",
    },
    {
      title: "Asia Miracle Business Awards 2024",
      desc: "Outstanding Social Impact & Sustainable Capital Growth.",
      img: "/images/awards/AW3.jpg",
    },
    {
      title: "BWIO International Excellence 2025",
      desc: "Excellence in Enterprise Funding & Strategic Venture Development.",
      img: "/images/awards/AW4.jpg",
    },
    {
      title: "Global Visionary Awards 2025",
      desc: "Recognized as a Leading Venture Capital & Economic Development Firm.",
      img: "/images/awards/AW2.jpg",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#0b0f17] text-white overflow-hidden">
      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(239,68,68,0.10),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-4">
            <Globe2 className="w-4 h-4" /> Global Venture & Financial Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-blue-500">Dearo Venture Canada Ltd</span>
          </h2>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-normal">
            <strong>Dearo Venture Canada Ltd</strong> is a forward-thinking investment and venture development company established to bridge strategic capital, innovative technology, and high-impact enterprise opportunities across global markets. Built upon a foundation of disciplined operational practices, robust risk governance, and transparent management, Dearo Venture Canada Ltd delivers structured financial solutions tailored for sustainable long-term value creation. Through a nationwide and international network of strategic partners and branches, we empower emerging businesses, modern agriculture, housing, and infrastructure initiatives—catalyzing economic growth while maintaining unwavering commitment to stakeholder trust and operational resilience.
          </p>
        </motion.div>

        {/* ================= CORE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 sm:mt-16">
          {[
            {
              icon: <Target className="text-blue-400 w-6 h-6" />,
              title: "Mission",
              text: "Delivering accessible, ethical, and high-impact venture financing to fuel economic expansion.",
            },
            {
              icon: <Eye className="text-purple-400 w-6 h-6" />,
              title: "Vision",
              text: "Building a resilient global financial ecosystem driving innovation and sustainable wealth creation.",
            },
            {
              icon: <Goal className="text-red-400 w-6 h-6" />,
              title: "Goals",
              text: "Ensuring long-term capital preservation, risk-managed yields, and nationwide economic progress.",
            },
            {
              icon: <Workflow className="text-emerald-400 w-6 h-6" />,
              title: "Process",
              text: "Combining rigorous underwriting, strategic advisory, and disciplined execution frameworks.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 text-lg font-bold text-white">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                    {item.icon}
                  </div>
                  {item.title}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= AWARDS & RECOGNITION ================= */}
        <div className="mt-20 sm:mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/20">
              <Award className="w-4 h-4" /> Global Recognition
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Achievements & Excellence</h3>
          </motion.div>

          <div className="relative group">
            {/* Carousel navigation arrows */}
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 border border-white/20 p-2.5 sm:p-3 rounded-full hover:scale-110 active:scale-95 transition z-20 text-white shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 border border-white/20 p-2.5 sm:p-3 rounded-full hover:scale-110 active:scale-95 transition z-20 text-white shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel container */}
            <div
              ref={awardsRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-8 sm:px-12 py-4 no-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[270px] sm:min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/10 transition-all snap-center flex flex-col justify-between"
                >
                  <div className="p-5 text-center flex-1">
                    <Award className="mx-auto text-amber-400 w-9 h-9 mb-2" />
                    <h4 className="font-bold text-base sm:text-lg text-white">{a.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">{a.desc}</p>
                  </div>

                  <div className="h-48 sm:h-52 flex items-center justify-center bg-black/40 p-4 border-t border-white/5">
                    <img
                      src={a.img}
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform hover:scale-105"
                      alt={a.title}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
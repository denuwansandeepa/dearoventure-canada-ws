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
      title: "Iconic Awards 2024",
      desc: "Best investment product provider & customer excellence.",
      img: "/images/awards/AW5.jpg",
    },
    {
      title: "Asia Miracle Awards 2024",
      desc: "Outstanding social impact & investment growth.",
      img: "/images/awards/AW3.jpg",
    },
    {
      title: "BWIO US Awards 2025",
      desc: "Excellence in entrepreneurship & project funding.",
      img: "/images/awards/AW4.jpg",
    },
    {
      title: "Bangkok Iconic Awards 2025",
      desc: "Fastest growing investment company in Sri Lanka.",
      img: "/images/awards/AW2.jpg",
    },
  ];

  return (
    <section className="relative py-28 bg-[#0b0f17] text-white overflow-hidden">

      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(239,68,68,0.10),transparent_60%)]" />

      <div className="max-w-8xl mx-auto px-6 relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Our Company</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
           Dearo Investment Ltd was established under the Companies Act No. 07 of 2007 and officially incorporated on 1st September 2022 under registration number PB 262527. Though relatively young, the company has rapidly positioned itself as a trusted and forward-looking provider of structured financial matter solutions, addressing the growing demand for secure, accessible, and well-governed financial support. Dearo Investment Ltd operates with a strong emphasis on risk management, disciplined operational practices, and stakeholder protection. Robust internal controls and comprehensive risk mitigation frameworks are embedded across all business activities to ensure transparency, stability, and responsible decision-making. With a network of 25 branches islandwide, Dearo Investment Ltd has established a strong nationwide presence, enabling inclusive access to its services across diverse communities. This extensive reach, combined with sound governance and a commitment to sustainable growth, reinforces the company’s focus on long-term value creation, customer confidence, and operational resilience.
          </p>
        </motion.div>

        {/* ================= CORE CARDS ================= */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {[
            {
              icon: <Target className="text-blue-400" />,
              title: "Mission",
              text: "Accessible & responsible financial solutions.",
            },
            {
              icon: <Eye className="text-purple-400" />,
              title: "Vision",
              text: "Building sustainable financial ecosystems.",
            },
            {
              icon: <Goal className="text-red-400" />,
              title: "Goals",
              text: "Long-term value creation & stability.",
            },
            {
              icon: <Workflow className="text-green-400" />,
              title: "Process",
              text: "Structured, disciplined growth systems.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3 text-lg font-semibold">
                {item.icon}
                {item.title}
              </div>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= AWARDS ================= */}
        <div className="mt-24">

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-3xl font-bold mb-10"
          >
            Achievements & Recognition
          </motion.h3>

          <div className="relative">

            {/* arrows */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-full hover:scale-110 transition z-10"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-full hover:scale-110 transition z-10"
            >
              <ChevronRight />
            </button>

            {/* carousel */}
            <div
              ref={awardsRef}
              className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-6 scrollbar-hide"
            >
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="min-w-[300px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/10 transition"
                >

                  <div className="p-5 text-center">
                    <Award className="mx-auto text-yellow-400 w-8 h-8 mb-2" />
                    <h4 className="font-semibold">{a.title}</h4>
                    <p className="text-sm text-gray-300 mt-2">{a.desc}</p>
                  </div>

                  <div className="h-52 flex items-center justify-center bg-black/20">
                    <img
                      src={a.img}
                      className="h-full object-contain"
                      alt=""
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
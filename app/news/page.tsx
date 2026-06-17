"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const newsArticles = [
  {
    title: "Dearo Investment Pvt Ltd sweeps multiple awards at Iconic Awards 2024",
    description:
      "Dearo Investment Pvt. Ltd. excelled at the Iconic Awards 2024, winning four notable awards including Best Investment Product Provider and Best Customer Service Excellence.",
    images: ["/images/news/newsg.jpg"],
  },
  {
    title: "Children's Day CSR Initiative in Ampara",
    description:
      "Dearo Investment supported Children’s Day by providing lunch to students of Ampara Uhana Primary School as part of CSR initiatives.",
    images: [
      "/images/news/school00.jpg",
      "/images/news/school1.jpg",
      "/images/news/school2.jpg",
      "/images/news/school4.jpg",
    ],
  },
  {
    title: "Dearo shines at People’s Excellency Awards",
    description:
      "Dearo Investment won multiple awards including Excellence in Workplace Development and Best Customer Service Provider in Colombo.",
    images: ["/images/news/news1.jpg"],
  },
  {
    title: "Supporting Ampara Temple Annual Procession",
    description:
      "Dearo Investment supported the annual temple procession, strengthening cultural heritage and community engagement.",
    images: ["/images/news/temple.jpg", "/images/news/temple1.jpg"],
  },
];

export default function NewsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [slide, setSlide] = useState<number[]>(newsArticles.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) =>
        prev.map((s, i) =>
          newsArticles[i].images.length > 1
            ? (s + 1) % newsArticles[i].images.length
            : s
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white">

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          News & <span className="text-cyan-400">Updates</span>
        </motion.h1>

        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Latest announcements, achievements, and corporate impact stories from Dearo Investment.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {newsArticles.map((news, i) => {
            const isOpen = expanded === i;
            const current = slide[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
              >

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={news.images[current]}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* subtle glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-500/10" />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="text-lg font-semibold leading-snug">
                    {news.title}
                  </h2>

                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {isOpen
                      ? news.description
                      : news.description.slice(0, 120) + "..."}
                  </p>

                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="mt-5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {isOpen ? "Show Less ↑" : "Read More →"}
                  </button>

                </div>

                {/* bottom glow line */}
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-blue-500" />

              </motion.div>
            );
          })}

        </div>
      </section>
    </main>
  );
}
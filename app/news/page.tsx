"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Award } from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  images: string[];
};

const newsArticles: NewsItem[] = [
  {
    id: 1,
    title: "Dearo Venture Canada Ltd sweeps multiple awards at Iconic Awards 2024",
    category: "Corporate Awards",
    date: "November 2024",
    description:
      "Dearo Venture Canada Ltd excelled at the Iconic Awards 2024, winning four notable awards including Best Investment Product Provider and Best Customer Service Excellence.",
    images: ["/images/news/newsg.jpg"],
  },
  {
    id: 2,
    title: "Children's Day CSR Initiative in Ampara",
    category: "CSR & Community",
    date: "October 2024",
    description:
      "Dearo Venture Canada Ltd supported Children’s Day by providing lunch and educational supplies to students of Ampara Uhana Primary School as part of CSR initiatives.",
    images: [
      "/images/news/school00.jpg",
      "/images/news/school1.jpg",
      "/images/news/school2.jpg",
      "/images/news/school4.jpg",
    ],
  },
  {
    id: 3,
    title: "Dearo Venture Canada shines at People’s Excellency Awards",
    category: "Recognition",
    date: "September 2024",
    description:
      "Dearo Venture Canada Ltd won multiple awards including Excellence in Workplace Development and Best Customer Service Provider.",
    images: ["/images/news/news1.jpg"],
  },
  {
    id: 4,
    title: "Supporting Ampara Temple Annual Procession",
    category: "Cultural Heritage",
    date: "August 2024",
    description:
      "Dearo Venture Canada Ltd supported the annual temple procession, strengthening cultural heritage and community engagement.",
    images: ["/images/news/temple.jpg", "/images/news/temple1.jpg"],
  },
];

export default function NewsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [slideIndices, setSlideIndices] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndices((prev) =>
        prev.map((idx, articleIdx) => {
          const imgs = newsArticles[articleIdx]?.images;
          if (imgs && imgs.length > 1) {
            return (idx + 1) % imgs.length;
          }
          return 0;
        })
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white pt-14 sm:pt-16">
      {/* HERO SECTION */}
      <section className="text-center py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" /> Official News & Media
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            News & <span className="text-cyan-400">Updates</span>
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            Stay updated with the latest announcements, global achievements, and community impact initiatives from <strong>Dearo Venture Canada Ltd</strong>.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article, i) => {
            const isOpen = expanded === i;
            const currentIdx = slideIndices[i] || 0;
            const activeImage = article.images[currentIdx] || article.images[0];

            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={activeImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-black/20 to-transparent" />

                  {/* CATEGORY BADGE */}
                  <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-cyan-300 px-3 py-1 rounded-lg text-xs font-semibold border border-white/10">
                    {article.category}
                  </div>

                  {/* MULTI IMAGE INDICATOR */}
                  {article.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
                      {article.images.map((_, dotIdx) => (
                        <div
                          key={dotIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            dotIdx === currentIdx ? "w-5 bg-cyan-400" : "w-1.5 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{article.date}</span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold leading-snug text-white group-hover:text-cyan-300 transition">
                      {article.title}
                    </h2>

                    <p className="text-gray-300 mt-2.5 text-xs sm:text-sm leading-relaxed">
                      {isOpen
                        ? article.description
                        : article.description.length > 110
                        ? article.description.slice(0, 110) + "..."
                        : article.description}
                    </p>
                  </div>

                  {article.description.length > 110 && (
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition text-left flex items-center gap-1 mt-3"
                    >
                      {isOpen ? "Show Less ↑" : "Read More →"}
                    </button>
                  )}
                </div>

                {/* BOTTOM GLOW LINE */}
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-blue-500" />
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
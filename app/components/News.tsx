"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";

export default function HomeNewsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] opacity-40 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group border border-gray-100"
        >
          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px]">
            <Image
              src="/images/banner.png"
              alt="Dearo Venture Canada Ltd Newsroom"
              fill
              priority
              className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* FLOATING BADGE */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-white/30 flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-300" /> Latest Announcements
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mt-8 sm:mt-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Dearo Venture Canada <span className="text-blue-600">Newsroom</span>
          </h2>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-4 rounded-full" />

          <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            <strong>Dearo Venture Canada Ltd</strong> continues to achieve remarkable milestones, earning global and national recognition through venture excellence awards, strategic partnerships, and community empowerment initiatives.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all text-sm sm:text-base group"
            >
              View All News & Updates
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
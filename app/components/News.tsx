"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeNewsSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] opacity-40 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <Image
            src="/images/banner.png"
            alt="Dearo Investment News"
            width={1400}
            height={100}
            className="w-full h-[600px]  object-cover scale-110 group-hover:scale-125 transition-transform duration-[1200ms] ease-out"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* floating badge */}
          <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm border border-white/30">
            Latest Updates
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mt-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dearo <span className="text-blue-600">Newsroom</span>
          </h2>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-4 rounded-full" />

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dearo Investment continues to achieve remarkable milestones,
            earning national recognition through awards, strategic partnerships,
            and industry excellence. Stay updated with our latest developments.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
            >
              View All News
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
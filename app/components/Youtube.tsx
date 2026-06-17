"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------- YouTube Video ---------------- */

function YouTubeVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 ">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

/* ---------------- Section ---------------- */

export default function TestimonialsSection() {
  const videos = [
    {
      id: "7z5peiI6Dss",
      title: "A Trusted Partner for Sustainable Investments",
      desc:
        "Dearo Investment supports entrepreneurs and SMEs through structured financial solutions that drive long-term growth.",
      reverse: false,
    },
    {
      id: "UxdckDrFK6I",
      title: "Growing Agriculture, Empowering Farmers",
      desc:
        "Our agri development initiative strengthens rural economies through sustainable investment models.",
      reverse: true,
    },
  ];

  return (
    <section className="relative py-20 bg-[#0b0f17] overflow-hidden text-white">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.10),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Stories of <span className="text-cyan-400">Impact</span>
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Real stories from real people — showing how structured investment
            creates real economic change.
          </p>
        </motion.div>

        {/* VIDEO BLOCKS */}
        <div className="space-y-20">

          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                v.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* VIDEO CARD */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition" />
                <YouTubeVideo videoId={v.id} title={v.title} />
              </div>

              {/* TEXT */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                  {v.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {v.desc}
                </p>

                <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
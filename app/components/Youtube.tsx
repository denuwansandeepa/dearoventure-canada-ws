"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, CheckCircle2 } from "lucide-react";

/* ---------------- YouTube Video Component ---------------- */

function YouTubeVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/60 aspect-video group">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
      title: "Empowering SME Growth & Venture Capital",
      desc: "Dearo Venture Canada Ltd supports growing businesses, entrepreneurs, and high-potential enterprises through structured venture capital solutions, strategic advisory, and capital frameworks that fuel long-term expansion.",
      highlights: ["Strategic Equity & Venture Debt", "Sustainable Enterprise Scaling", "Global Investor Networks"],
      reverse: false,
    },
    {
      id: "UxdckDrFK6I",
      title: "Modernizing Sustainable Agriculture & Rural Economies",
      desc: "Our agricultural investment initiatives connect modern tech, equipment funding, and sustainable capital models to empower farming communities and build resilient food supply chains.",
      highlights: ["Agri-Tech Infrastructure", "Empowering Local Producers", "Environmentally Sustainable Finance"],
      reverse: true,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#0b0f17] overflow-hidden text-white">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.10),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" /> Real Impact & Progress
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Stories of <span className="text-cyan-400">Impact</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how strategic venture investments by <strong>Dearo Venture Canada Ltd</strong> create tangible economic value, drive enterprise growth, and transform communities.
          </p>
        </motion.div>

        {/* VIDEO BLOCKS */}
        <div className="space-y-16 sm:space-y-24">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                v.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* VIDEO CARD (7 cols on desktop) */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500" />
                <YouTubeVideo videoId={v.id} title={v.title} />
              </div>

              {/* TEXT CONTENT (5 cols on desktop) */}
              <div className="lg:col-span-5 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-white">
                  {v.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {v.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {v.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Building2, Users, Wallet, Briefcase } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

/* ================= COUNT UP ================= */

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.floor(v));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/* ================= COMPONENT ================= */

export default function StatsSection() {
  const stats = [
    { label: "Branches", value: 25, suffix: "+", icon: Building2 },
    { label: "Clients", value: 25000, suffix: "+", icon: Users },
    { label: "Assets", value: 2, suffix: "Bn+", icon: Wallet },
    { label: "Team", value: 350, suffix: "+", icon: Briefcase },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 overflow-hidden">

      {/* soft glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 blur-[100px] rounded-full" />

      <div className="max-w-8xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Impact <span className="text-cyan-300">Stats</span>
          </h2>

          <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
            Measurable growth driven by trust, performance, and scale.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >

                <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center transition-all duration-300 hover:bg-white/10">

                  {/* ICON */}
                  <div className="mx-auto w-fit p-2 rounded-full bg-white/10 mb-3">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>

                  {/* NUMBER */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </h3>

                  {/* LABEL */}
                  <p className="text-white/60 text-xs mt-1 tracking-wide">
                    {s.label}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
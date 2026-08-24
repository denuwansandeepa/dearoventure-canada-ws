"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    title: "Agriculture & Plantation",
    description:
      "Sustainable farming solutions powered by modern agricultural technology, equipment funding, and innovation.",
    image: "/images/agri1.png",
  },
  {
    title: "Engineering & Infrastructure",
    description:
      "High-quality civil, structural, and infrastructure development delivered with high engineering standards.",
    image: "/images/civil.png",
  },
  {
    title: "Education & Skills Training",
    description:
      "Professional education programs focused on skills development, leadership, and future readiness.",
    image: "/images/edu.png",
  },
  {
    title: "Dearo Lime Industry",
    description:
      "Natural high-calcium lime products for industrial, environmental, and agricultural applications.",
    image: "/images/fam.png",
  },
  {
    title: "DCCI – Sustainable Seafood",
    description:
      "Sustainable seafood harvested and processed under rigorous international quality standards for global export.",
    image: "/images/fish.png",
  },
  {
    title: "Dearo Tech & IT Solutions",
    description:
      "Smart, secure, and scalable IT solutions and digital transformation designed to empower modern enterprises.",
    image: "/images/it.png",
  },
  {
    title: "Dearo Venture Canada Ltd",
    description:
      "Strategic venture investment arm focused on cross-border growth, equity funding, and sustainable value creation.",
    image: "/images/inve1.png",
  },
];

export default function BusinessSectors() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".sector-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* SOFT GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] opacity-40 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Subsidiaries & <span className="text-blue-600">Ventures</span>
          </h2>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-4 rounded-full" />

          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Driving economic growth through diversified, strategic business ventures under Dearo Venture Canada Ltd.
          </p>
        </div>

        {/* GRID */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {sectors.map((sector, i) => (
            <div
              key={i}
              className="sector-card group relative rounded-2xl overflow-hidden cursor-pointer bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-115 transition-transform duration-[1000ms] ease-out"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition" />

                {/* TITLE ON IMAGE */}
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {sector.title}
                  </h3>

                  <div className="h-[2.5px] w-0 group-hover:w-16 bg-blue-400 mt-2 transition-all duration-400" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 bg-white flex-1 flex items-center">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {sector.description}
                </p>
              </div>

              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border-2 border-blue-500/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
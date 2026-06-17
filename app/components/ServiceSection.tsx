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
      "Sustainable farming solutions powered by modern agricultural technology and innovation.",
    image: "/images/agri1.png",
  },
  {
    title: "Engineering & Construction",
    description:
      "High-quality civil, structural, and infrastructure development across Sri Lanka.",
    image: "/images/civil.png",
  },
  {
    title: "Education & Training",
    description:
      "Professional education programs focused on skills development and future readiness.",
    image: "/images/edu.png",
  },
  {
    title: "Dearo Lime",
    description:
      "Natural high-calcium lime products for industrial and agricultural applications.",
    image: "/images/fam.png",
  },
  {
    title: "DCCI – From Our Waters to the World",
    description:
      "Sustainable seafood processed with international quality standards for global markets.",
    image: "/images/fish.png",
  },
  {
    title: "Dearo IT Solutions",
    description:
      "Smart, secure and scalable IT solutions designed to empower your business.",
    image: "/images/it.png",
  },
  {
    title: "Dearo Investment Limited",
    description:
      "Strategic investment arm focused on long-term value creation and sustainable growth.",
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
        y: 80,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white">

      {/* soft glow background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] opacity-40 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Subsidiaries</span>
          </h2>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-4 rounded-full" />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Driving growth through diversified and strategic business ventures
          </p>
        </div>

        {/* GRID */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {sectors.map((sector, i) => (
            <div
              key={i}
              className="sector-card group relative rounded-2xl overflow-hidden cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden rounded-2xl">

                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-[1200ms] ease-out"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition" />

                {/* title on image */}
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">
                    {sector.title}
                  </h3>

                  <div className="h-[2px] w-0 group-hover:w-20 bg-blue-400 mt-2 transition-all duration-500" />
                </div>

              </div>

              {/* CONTENT (glass floating feel) */}
              <div className="p-5 bg-white/70 backdrop-blur-md border border-white/40 rounded-b-2xl">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {sector.description}
                </p>
              </div>

              {/* glow border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-transparent to-red-500/10 pointer-events-none" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
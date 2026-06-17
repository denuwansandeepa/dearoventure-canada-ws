import Image from "next/image";
import {
  TrendingUp,
  Users,
  Factory,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "MSME Growth Solutions | Dearo Investment Limited",
};

export default function MSMEGrowthPage() {
  return (
    <section className="bg-[#0F172A] text-white">

      {/* ===== HERO SPLIT ===== */}
     
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-16">
          <span className="uppercase tracking-widest text-sm text-[#38BDF8] mb-4">
            MSME Growth Platform
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Empowering <br />
            <span className="text-[#38BDF8]">Small & Medium Enterprises</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Structured business support designed to help MSMEs scale operations,
            strengthen cash flow, and achieve long-term sustainability with
            confidence.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#38BDF8] text-[#0F172A] px-6 py-3 rounded-full font-semibold w-fit hover:bg-white transition"
          >
            Explore Opportunities <ArrowRight size={18} />
          </a>
        </div>

      

      {/* ===== HIGHLIGHT STRIP ===== */}
      <div className="bg-[#020617] py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          {[
            { icon: TrendingUp, title: "Growth Focused", text: "Built for scalable expansion" },
            { icon: Layers, title: "Structured Support", text: "Clear, organized solutions" },
            { icon: Users, title: "MSME Centric", text: "Designed around real business needs" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <item.icon className="w-10 h-10 text-[#38BDF8]" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHO CAN APPLY – GLASS CARDS ===== */}
      <div className="py-20 px-6 bg-gradient-to-b from-[#0F172A] to-[#020617]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Who Can Apply
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Briefcase, label: "Sole Proprietors & Partnerships" },
            { icon: Factory, label: "Small & Medium Enterprises" },
            { icon: Users, label: "Established Businesses" },
            { icon: TrendingUp, label: "Stable Cash-Flow Businesses" },
          ].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <item.icon className="w-10 h-10 mx-auto text-[#38BDF8] mb-4" />
              <p className="font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ELIGIBLE USES – TIMELINE STYLE ===== */}
      <div className="bg-[#020617] py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How MSMEs Use This Support
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "Working capital optimization",
            "Business expansion & scaling",
            "Machinery and equipment upgrades",
            "Inventory and operational growth",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-[#38BDF8] flex items-center justify-center text-[#020617] font-bold">
                {i + 1}
              </div>
              <p className="text-gray-300 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

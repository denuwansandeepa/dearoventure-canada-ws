import Image from "next/image";
import {
  TrendingUp,
  Layers,
  Briefcase,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Business Loans | Dearo Investment Limited",
};

export default function BusinessLoansPage() {
  return (
    <section className="bg-[#0F172A] text-white overflow-hidden">

    {/* ================= HERO SPLIT ================= */}
<div className="grid lg:grid-cols-2 min-h-[85vh]">
  {/* Left */}
  <div className="flex flex-col justify-center px-6 md:px-10">
    <span className="uppercase tracking-widest text-sm text-[#38BDF8] mb-4">
      {/* optional subtext */}
    </span>

   
     <h1 className="text-4xl md:text-5xl font-extrabold leading-tight my-15 mb-6">
            Business Financing <br /> Powering<br/>
            <span className="text-[#38BDF8]"> Business Expansion</span>
          </h1>

    <p className="text-gray-300 text-lg max-w-xl mb-8">
      Strategic financing solutions to support growth, asset investment,
      and operational excellence for businesses across Sri Lanka.
    </p>

    
  </div>


        {/* Right Image */}
        <div className="relative  mt-22 h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assests/b.png"
            alt="Business Loans"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/70 to-transparent" />
        </div>
      </div>

      {/* ================= HIGHLIGHT STRIP ================= */}
      <div className="bg-[#020617] py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          {[
            {
              icon: TrendingUp,
              title: "Growth Focused",
              text: "Financing built for scale",
            },
            {
              icon: Layers,
              title: "Structured Lending",
              text: "Clear & transparent terms",
            },
            {
              icon: Briefcase,
              title: "Business First",
              text: "Designed for SMEs & enterprises",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <item.icon className="w-10 h-10 text-[#38BDF8]" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= GLASS FEATURE CARDS ================= */}
      <div className="py-20 px-6 bg-gradient-to-b from-[#0F172A] to-[#020617]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Financing Solutions Offered
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Factory, label: "Asset & Machinery Financing" },
            { icon: TrendingUp, label: "Business Expansion Loans" },
            { icon: Layers, label: "Working Capital Support" },
            { icon: Briefcase, label: "Inventory Financing" },
            { icon: CheckCircle, label: "Operational Cost Coverage" },
            { icon: ArrowRight, label: "Flexible Repayment Plans" },
          ].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition"
            >
              <item.icon className="w-10 h-10 mx-auto text-[#38BDF8] mb-4" />
              <p className="font-medium text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TIMELINE – HOW IT HELPS ================= */}
      <div className="bg-[#020617] py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How Business Loans Help You Grow
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            "Improve cash flow and working capital stability",
            "Expand operations or relocate strategically",
            "Invest in machinery, technology, and assets",
            "Strengthen long-term business sustainability",
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

      {/* ================= ELIGIBILITY & PURPOSE ================= */}
      <div className="py-20 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#38BDF8]">
              Eligibility
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Registered business entity</li>
              <li>✔ Minimum 1 year of operation</li>
              <li>✔ Stable cash flow records</li>
              <li>✔ Clear loan utilization plan</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#38BDF8]">
              Loan Purpose
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Expansion & scaling</li>
              <li>✔ Equipment purchase</li>
              <li>✔ Inventory financing</li>
              <li>✔ Working capital needs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="bg-[#020617] py-20 text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Strengthen Your Business?
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Partner with Dearo Investment Limited and access structured,
          growth-driven business financing.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#38BDF8] text-[#020617] px-8 py-4 rounded-full font-semibold hover:bg-white transition"
        >
          Get Started Today <ArrowRight size={20} />
        </a>
      </div>

    </section>
  );
}

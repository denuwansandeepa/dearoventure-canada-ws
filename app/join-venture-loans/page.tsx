import Image from "next/image";
import {
  Users,
  TrendingUp,
  ShieldCheck,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Joint Venture Loans | Dearo Venture Canada Ltd",
  description:
    "Structured Joint Venture Loan solutions supporting partnership-driven businesses with working capital and strategic growth financing.",
};

export default function JoinVentureLoansPage() {
  return (
    <main className="bg-[#020617] text-gray-200 overflow-hidden">

      {/* ================= SPLIT HERO ================= */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-14">
         
          <h1 className="text-4xl md:text-6xl mt-30 font-extrabold leading-tight mb-6">
            Join Venture <br />
            <span className="text-cyan-400">Loan Solutions</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            The Join Venture Loan is designed to support established join
            ventures and partnership-based businesses by providing structured
            funding to strengthen operations and support strategic growth.
            By enabling partners to share financial responsibility while
          maintaining operational continuity, the Join Venture Loan promotes
          stability, collaboration, and sustainable growth for
          partnership-driven enterprises.
          </p>

          
        </div>

       
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          
        </p>
      </section>

      {/* ================= PURPOSE (TIMELINE STYLE) ================= */}
      <section className="bg-[#020617] border-t border-white/10 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Purpose of the <span className="text-cyan-400">Join Venture Loan</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            "Supporting working capital requirements of ongoing join venture operations",
            "Addressing short-term liquidity gaps to maintain business continuity",
            "Financing the expansion and scaling of existing join venture businesses",
            "Facilitating shared risk and responsibility among join venture partners",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-[#020617] font-bold">
                {i + 1}
              </div>
              <p className="text-gray-300 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY BENEFITS (GLASS CARDS) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Key <span className="text-cyan-400">Benefits</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Layers,
              text: "Structured funding aligned with join venture cash flows",
            },
            {
              icon: TrendingUp,
              text: "Flexible repayment arrangements based on business performance",
            },
            {
              icon: ShieldCheck,
              text: "Clear accountability and governance among partners",
            },
            {
              icon: Users,
              text: "Enhanced financial stability for partnership-driven enterprises",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <item.icon className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
              <p className="text-gray-300 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-white/10 py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Strengthen Your <span className="text-cyan-400">Join Venture</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Partner with Dearo Venture Canada Ltd to access structured,
          performance-aligned financing designed to support collaboration,
          stability, and long-term growth.
        </p>
        <a
          href="/contact"
          className="inline-block bg-cyan-400 text-[#020617] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
        >
          Speak to Our Team
        </a>
      </section>

    </main>
  );
}

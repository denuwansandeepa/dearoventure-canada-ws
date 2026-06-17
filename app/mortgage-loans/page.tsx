import {
  Home,
  Building2,
  Briefcase,
  CreditCard,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Mortgage Loans | Dearo Investment Limited",
};

export default function MortgageLoansPage() {
  return (
    <main className="bg-[#020617] text-gray-200">

      {/* ================= SPLIT HERO ================= */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-14">
          <span className="uppercase tracking-widest text-sm text-cyan-400 mb-4">
            Mortgage Solutions
          </span>

          <h1 className="text-4xl md:text-6xl mt-20 font-extrabold leading-tight mb-6">
            Secure Funding Backed by <br />
            <span className="text-cyan-400">Your Property</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            Unlock the value of your residential, commercial, or land assets
            through structured mortgage solutions designed for stability,
            flexibility, and long-term financial confidence.
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/assests/mo.png"
            alt="Dearo Mortgage Loans"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#020617] via-transparent to-transparent" />
        </div>
      </section>

      {/* ================= WHO CAN APPLY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Who <span className="text-cyan-400">Can Apply</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              text: "Individuals with legally acceptable properties",
            },
            {
              icon: Briefcase,
              text: "Entrepreneurs and business owners",
            },
            {
              icon: Building2,
              text: "Owners of residential, commercial, or land assets",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center"
            >
              <item.icon className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
              <p className="text-gray-200 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES (GLASS CARDS) ================= */}
      <section className="bg-[#020617] border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Key <span className="text-cyan-400">Features</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Higher Funding Amounts",
                desc: "Based on professionally assessed property value",
                icon: CreditCard,
              },
              {
                title: "Longer Repayment Tenures",
                desc: "Structured for comfortable monthly repayments",
                icon: ShieldCheck,
              },
              {
                title: "Flexible Repayment Options",
                desc: "Aligned with income and cash-flow patterns",
                icon: CheckCircle,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition"
              >
                <item.icon className="text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTERED SECOND ROW */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              {
                title: "Secure Financing",
                desc: "Asset-backed lending framework",
              },
              {
                title: "Peace of Mind",
                desc: "Achieve financial goals while maintaining stability",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg text-center w-full md:w-[380px]"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-white/10 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Build Stability with <span className="text-cyan-400">Confidence</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Secure structured mortgage funding designed to support long-term
          financial needs while protecting asset value.
        </p>
        <a
          href="/contact"
          className="inline-block bg-cyan-400 text-[#020617] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}

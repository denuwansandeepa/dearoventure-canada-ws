import Image from "next/image";
import {
  Home,
  Users,
  Wrench,
  Layers,
  Clock,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Housing Loan | Dearo Venture Canada Ltd",
  description:
    "Structured housing loan solutions for home renovations, extensions, and improvements with long-term stability.",
};

export default function HousingLoansPage() {
  return (
    <main className="bg-[#020617] text-gray-200 overflow-hidden">

      {/* ================= SPLIT HERO ================= */}
      <section className="grid lg:grid-cols-2 min-h-[85vh] mt-[80px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16">
          

            <h1 className="text-4xl md:text-6xl mt-20 font-extrabold leading-tight mb-6 "><span className="text-[#4F7CFF]">Dearo Venture Canada</span>
          <br/> Housing Loan
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            Upgrade, enhance, or transform your home with the Dearo Venture Canada Housing Loan.
            Designed for residential property owners, this solution provides
            structured, long-term funding for renovations, extensions, and home
            improvements—backed by transparent terms and dependable service.
          </p>
        </div>

       
      </section>

      {/* ================= WHO CAN APPLY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Who Can Apply
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Home, label: "Salaried individuals and families" },
            { icon: Users, label: "Self-employed professionals" },
            { icon: ShieldCheck, label: "Owners of residential properties" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <item.icon className="w-10 h-10 mx-auto text-blue-400 mb-4" />
              <p className="text-gray-300 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW YOU CAN USE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How You Can Use the Loan
        </h2>

        <div className="relative space-y-12">
          {[
            {
              title: "Renovations & Upgrades",
              desc: "Home renovations and functional upgrades",
              icon: Wrench,
            },
            {
              title: "Extensions & Improvements",
              desc: "Structural extensions and improvements",
              icon: Layers,
            },
            {
              title: "Interior & Exterior Enhancements",
              desc: "Modern interior and exterior improvements",
              icon: Home,
            },
            {
              title: "Modernization",
              desc: "Refurbishment of existing homes",
              icon: ShieldCheck,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 max-w-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose the Dearo Housing Loan
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: Clock,
              title: "Longer Tenures",
              desc: "Repayment periods designed to ease monthly commitments",
            },
            {
              icon: CreditCard,
              title: "Lower Monthly Installments",
              desc: "Plans aligned with household cash flow",
            },
            {
              icon: Home,
              title: "Aligned Funding Amounts",
              desc: "Based on income capacity and property value",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <item.icon className="w-10 h-10 mx-auto text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Wrench,
              title: "Flexible Repayment Options",
              desc: "Cash-flow-based repayment structures",
            },
            {
              icon: ShieldCheck,
              title: "Secure Financing",
              desc: "Property-backed lending framework",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <item.icon className="w-10 h-10 mx-auto text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

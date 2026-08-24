import Link from "next/link";
import { TrendingUp, ShieldCheck, Globe, Leaf, Landmark } from "lucide-react";

export const metadata = {
  title: "Personal Loans | Dearo Venture Canada Ltd",
  description:
    "Flexible personal loan solutions to support individuals with healthcare, education, home, and lifestyle financial needs.",
};

export default function PersonalLoansPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Tailored Loan Structures",
      text: "Flexible personal loans designed to match individual financial requirements and repayment capacity.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Terms",
      text: "Clear documentation and responsible lending practices to ensure predictable and safe financing.",
    },
    {
      icon: Globe,
      title: "Quick & Efficient Process",
      text: "Simple application process with timely approvals to meet urgent and planned financial needs.",
    },
    {
      icon: Leaf,
      title: "Flexible Repayment",
      text: "Repayment schedules aligned with income patterns for stress-free financial management.",
    },
  ];

  const timeline = [
    {
      title: "Healthcare & Medical",
      desc: "Covering medical treatments, health emergencies, and wellness investments.",
    },
    {
      title: "Education & Skills",
      desc: "Supporting tuition fees, skill development, certifications, and educational growth.",
    },
    {
      title: "Home & Lifestyle",
      desc: "Funding renovations, improvements, and lifestyle needs for individuals and families.",
    },
    {
      title: "Emergencies & Miscellaneous",
      desc: "Immediate funding for unexpected expenses and personal financial requirements.",
    },
  ];

  return (
    <main className="bg-[#0B1220] text-white">

      {/* ================= SPLIT HERO ================= */}
      <section className="min-h-[90vh] grid lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="flex items-center px-8 md:px-16 bg-gradient-to-br ">
          <div>
            <h1 className="text-4xl md:text-5xl mt-30 font-extrabold leading-tight mb-6">
              <span className="text-[#4F7CFF]">Personal Loan Solutions</span> <br />
              Flexible Funding for Individuals
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl">
              Personal loan solutions provide convenient, transparent, and flexible financing to support 
              medical expenses, education, household improvements, emergencies, and lifestyle planning.
            </p>
          </div>
        </div>

       
      </section>

      {/* ================= GLASS FEATURE CARDS ================= */}
      <section className="relative z-10 -mt-12 pt-13 px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition transform"
            >
              <item.icon className="w-10 h-10 text-[#4F7CFF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PURPOSE OF PERSONAL LOANS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          Purpose of Personal Loans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-15">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition transform"
            >
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#4F7CFF] mb-3 text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base text-center">
                {item.desc}
              </p>

              {/* Decorative underline */}
              <div className="mt-4 w-16 h-1 mx-auto bg-gradient-to-r from-[#4F7CFF] to-[#335DD0FF] rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#020617] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Landmark className="w-12 h-12 mx-auto text-[#4F7CFF] mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold">
            Get Your Personal Loan Today
          </h3>
          <p className="mt-6 text-gray-300">
            Apply for a Personal Loan with Dearo Venture Canada Ltd to get quick, reliable, and tailored financing for your personal needs.
          </p>

          <Link href="/contact">
            <button className="mt-10 px-10 py-4 rounded-full bg-[#335DD0FF] font-semibold hover:bg-blue-600 transition">
              Contact Our Team
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

import Image from "next/image";
import {
  Building,
  Factory,
  Hotel,
  Settings,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Project Loans | Dearo Investment Limited",
  description:
    "Structured project loan solutions supporting medium to large-scale developments from planning to completion.",
};

export default function ProjectLoansPage() {
  return (
    <main className="bg-[#020617] text-gray-200">

      {/* ================= SPLIT HERO ================= */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-14">
          <span className="uppercase tracking-widest text-sm text-cyan-400 mb-4">
            Project Loan Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-10 mb-6">
            Structured Funding for <br />
            <span className="text-cyan-400">Project Success</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            The Project Loan is designed to support standalone and structured
            projects by providing funding from planning through to completion,
            enabling disciplined execution, cost control, and long-term value
            creation.By aligning funding with project milestones and operational
          requirements, Project Loans enable timely execution, effective cost
          management, and successful delivery of medium to large-scale ventures.
          </p>

          
        </div>

       
      </section>

    
      

      {/* ================= KEY FOCUS AREAS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Key <span className="text-cyan-400">Focus Areas</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Building,
              title: "Construction & Infrastructure",
              desc: "Large-scale construction and infrastructure development projects",
            },
            {
              icon: Hotel,
              title: "Tourism & Hospitality",
              desc: "Hotels, resorts, and tourism-driven developments",
            },
            {
              icon: Factory,
              title: "Manufacturing & Industrial Services",
              desc: "Factories, plants, and industrial service expansions",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <item.icon className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PURPOSE OF FINANCING (TIMELINE) ================= */}
      <section className="bg-[#020617] border-t border-white/10 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Purpose of <span className="text-cyan-400">Financing</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            "Financing new projects from planning to completion",
            "Supporting project expansion and capacity enhancement",
            "Funding modernization and operational upgrades",
            "Facilitating efficient execution of capital-intensive projects",
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

      {/* ================= STRUCTURE HIGHLIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Project Loan <span className="text-cyan-400">Structure</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Funding aligned with project milestones",
            "Phased disbursement based on progress",
            "Clear governance and accountability frameworks",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
            >
              <CheckCircle className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
              <p className="text-gray-300 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-white/10 py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Deliver Your Project with <span className="text-cyan-400">Confidence</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Partner with Dearo Investment Limited to access disciplined,
          milestone-driven project financing designed for sustainable success.
        </p>
        <a
          href="/contact"
          className="inline-block bg-cyan-400 text-[#020617] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
        >
          Contact Our Team
        </a>
      </section>

    </main>
  );
}

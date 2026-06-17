import Image from "next/image";
import {
  Leaf,
  Tractor,
  Droplets,
  Warehouse,
  Cpu,
  LineChart,
} from "lucide-react";

export const metadata = {
  title: "Agriculture Capital Investment | Dearo Investment Limited",
  description:
    "Flexible capital solutions supporting smart agriculture, agribusiness growth, and rural development initiatives.",
};

export default function AgricultureCapitalInvestmentPage() {
  return (
    <section className="bg-[#052815] text-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

          {/* Hero Text */}
          <div>
            

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
               Dearo Agri Loans 
            Empowering Smart Agriculture
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Flexible capital solutions designed to support farmers,
              agribusinesses, and rural development initiatives—enabling
              modernization, productivity, and long-term sustainability.Our Agri loans supports both traditional
            agriculture and smart farming solutions by providing structured
            funding for innovation, efficiency, and value creation across the
            agricultural sector.
            </p>
          </div>

         
        </div>
      </div>

      

      {/* ================= KEY FOCUS AREAS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <Leaf className="w-8 h-8 text-green-400" />,
            title: "Crop Cultivation",
            desc: "Smart farming methods and high-yield production systems.",
          },
          {
            icon: <Tractor className="w-8 h-8 text-green-400" />,
            title: "Machinery & Equipment",
            desc: "Modern machinery, automation, and smart farm equipment.",
          },
          {
            icon: <Warehouse className="w-8 h-8 text-green-400" />,
            title: "Livestock & Dairy",
            desc: "Technology-assisted feeding, breeding, and farm management.",
          },
          {
            icon: <LineChart className="w-8 h-8 text-green-400" />,
            title: "Rural Development",
            desc: "Infrastructure, storage, and agri-processing facilities.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ================= SMART FARMING TIMELINE ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Smart Farming Technology Support
        </h2>

        <div className="space-y-12 border-l border-white/10 pl-8">
          {[
            {
              icon: <Cpu className="w-6 h-6 text-green-400" />,
              text: "Precision agriculture and smart farming systems",
            },
            {
              icon: <Droplets className="w-6 h-6 text-green-400" />,
              text: "Advanced irrigation and water-management solutions",
            },
            {
              icon: <Warehouse className="w-6 h-6 text-green-400" />,
              text: "Post-harvest handling, storage, and cold-chain development",
            },
            {
              icon: <LineChart className="w-6 h-6 text-green-400" />,
              text: "Digital tools for monitoring, data analysis, and productivity improvement",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[46px] top-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur">
                {item.icon}
              </span>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Invest in Sustainable Agriculture
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partner with Dearo Investment Limited to modernize agriculture,
            improve productivity, and build long-term value through smart
            capital investment.
          </p>
<br/>
          <a
          href="/contact"
          className="inline-block bg-white text-[#020617] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
        >
          Contact Us
        </a>
        </div>
      </div>

    </section>
  );
}

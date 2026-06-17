import {
  Car,
  Truck,
  Bike,
  Briefcase,
  Users,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Hire Purchase Solutions | Dearo Investment Limited",
};

export default function HirePurchaseLoansPage() {
  return (
    <main className="bg-[#020617] text-gray-200">

      {/* ================= SPLIT HERO ================= */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-14">
          <span className="uppercase tracking-widest text-sm text-cyan-400 mb-4">
            Vehicle Hire Purchase Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-30 mb-6">
            Drive Forward with <br />
            <span className="text-cyan-400">Confidence & Clarity</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            Structured hire purchase solutions designed to support individuals,
            entrepreneurs, and businesses in acquiring vehicles for personal,
            commercial, and income-generating needs — with affordability,
            transparency, and long-term sustainability.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-400 text-[#020617] px-7 py-3 rounded-full font-semibold w-fit hover:bg-white transition"
          >
            Enquire Now
          </a>
        </div>

        
         
      </section>

      {/* ================= FEATURES (GLASS CARDS) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Key <span className="text-cyan-400">Features</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Competitive hire purchase structures tailored to vehicle value",
            "Flexible repayment periods aligned with income patterns",
            "Funding based on vehicle valuation & eligibility criteria",
            "Clear documentation with transparent terms",
            "Options for new and pre-owned vehicles",
            "Available for personal and commercial use",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <CheckCircle className="text-cyan-400 mb-4" />
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="bg-[#020617] border-t border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Eligible <span className="text-cyan-400">Vehicle Categories</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { icon: Car, text: "Passenger vehicles" },
              { icon: Truck, text: "Commercial vehicles" },
              { icon: Bike, text: "Three-wheelers & motorcycles" },
              { icon: Briefcase, text: "Income-generating & operational vehicles" },
              { icon: Truck, text: "Vans and light trucks" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
              >
                <item.icon className="w-8 h-8 text-cyan-400" />
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO CAN APPLY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Who <span className="text-cyan-400">Can Apply</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Users, text: "Salaried individuals" },
            { icon: Briefcase, text: "Self-employed professionals" },
            { icon: Users, text: "Small & medium-scale business owners" },
            {
              icon: Truck,
              text: "Entrepreneurs in trade, transport, or services",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center gap-4"
            >
              <item.icon className="text-cyan-400" />
              <p className="text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-white/10 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Move Forward with <span className="text-cyan-400">Confidence</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Explore structured hire purchase solutions designed for affordability,
          transparency, and sustainable ownership.
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

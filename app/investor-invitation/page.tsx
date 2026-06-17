import { Users, BarChart2, ShieldCheck, Globe, Mail } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Investment Opportunities | Dearo Investment Limited",
};

export default function InvestmentOpportunitiesPage() {
  return (
    <main className="bg-gray-50">

      {/* ===== HERO SECTION WITH COVER IMAGE ===== */}
      <section className="relative mt-23 w-full h-[400px] md:h-[500px]">
        <Image
          src="/assests/inv.png" // your top cover image
          alt="Dearo Investment Opportunities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute mt-10 inset-0 bg-black/40 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Dearo Investment Limited – Investment Opportunities
          </h1>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Dearo Investment Limited welcomes institutional partners and strategic stakeholders to participate in a fast-growing company in Sri Lanka and beyond. Our disciplined risk management, diversified business & lending portfolio, and strong governance framework position Dearo as a compelling equity investment opportunity for investors seeking stable returns and sustainable growth.
        </p>
      </section>

      {/* ===== WHY INVEST SECTION ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Invest With Dearo?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Attractive Returns */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <BarChart2 className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Attractive & Predictable Returns</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Structured equity investment models delivering competitive and consistent returns, supported by transparent reporting aligned with international standards.
              </p>
            </div>

            {/* Robust Risk Management */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <ShieldCheck className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Robust Risk Management</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Advanced credit assessment and collateral-backed lending strategies safeguard capital and minimize exposure.
              </p>
            </div>

            {/* Scalable Growth */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <Globe className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Growth Strategy</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Expansion into 25+ branches and international markets including Kenya and the Philippines, powered by digital transformation.
              </p>
            </div>

            {/* Impact Driven Investing */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact-Driven Investing</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Focus on SMEs, agriculture, and underserved communities, delivering measurable financial, social, and ESG impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Join Our Growth Journey
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Dearo invites institutional and strategic equity investors to explore opportunities for secure, high-quality returns while contributing to inclusive economic development. Partner with us to grow your capital responsibly and strategically.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition"
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact Us
        </a>
      </section>

    </main>
  );
}

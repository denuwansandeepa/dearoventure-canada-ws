import { Users, BarChart2, ShieldCheck, Globe, Mail } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Investment Opportunities | Dearo Venture Canada Ltd",
};

export default function InvestmentOpportunitiesPage() {
  return (
    <main className="bg-gray-50 pt-[48px] sm:pt-[52px]">
      {/* ===== HERO SECTION WITH COVER IMAGE ===== */}
      <section className="relative w-full h-[280px] sm:h-[380px] md:h-[450px]">
        <Image
          src="/images/banners/investor.jpg"
          alt="Dearo Venture Canada Investment Opportunities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 sm:px-6">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold text-center max-w-4xl tracking-tight">
            Dearo Venture Canada Ltd – Investment Opportunities
          </h1>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p className="text-gray-700 text-base sm:text-xl leading-relaxed font-normal">
          <strong>Dearo Venture Canada Ltd</strong> welcomes institutional partners, angel networks, and strategic equity stakeholders to participate in our rapidly growing venture and investment portfolio. Our disciplined risk management, diversified venture capital asset base, and strong governance framework position Dearo Venture Canada Ltd as a compelling equity investment destination for investors seeking sustainable yields and global impact.
        </p>
      </section>

      {/* ===== WHY INVEST SECTION ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Why Invest With Dearo Venture Canada?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Attractive Returns */}
            <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col justify-between">
              <div>
                <BarChart2 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Predictable Venture Yields</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Structured equity investment models delivering competitive and consistent yields, supported by transparent reporting aligned with international accounting standards.
                </p>
              </div>
            </div>

            {/* Robust Risk Management */}
            <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Disciplined Governance</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Advanced risk assessments, robust internal controls, and collateralized capital frameworks safeguard investor equity against market volatility.
                </p>
              </div>
            </div>

            {/* Scalable Growth */}
            <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col justify-between">
              <div>
                <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Scale & Expansion</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Strategic presence across Canada, Sri Lanka, and expanding international venture networks powered by digital transformation.
                </p>
              </div>
            </div>

            {/* Impact Driven Investing */}
            <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col justify-between">
              <div>
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">High ESG & Social Impact</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Focus on sustainable agriculture, tech enterprises, and underserved sectors, delivering positive economic and social impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-gray-100 py-16 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Join Our Global Growth Journey
        </h2>
        <p className="text-gray-600 text-sm sm:text-lg max-w-3xl mx-auto mb-8">
          Dearo Venture Canada Ltd invites institutional and strategic equity partners to explore opportunities for secure, high-quality returns while contributing to inclusive economic development.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition text-sm sm:text-base"
        >
          <Mail className="w-5 h-5 mr-2" />
          Partner With Us
        </a>
      </section>
    </main>
  );
}

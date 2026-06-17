import Image from "next/image";

export const metadata = {
  title: "Financial & Insurance Partners | Dearo Investment Limited",
};

/* ================= TYPES ================= */
interface PartnerCardProps {
  image: string;
  alt: string;
  title: string;
  role: string;
  description: string;
}

/* ================= CARD COMPONENT ================= */
function PartnerCard({
  image,
  alt,
  title,
  role,
  description,
}: PartnerCardProps) {
  return (
    <div
      className="bg-white rounded-3xl shadow-lg
                 p-6 sm:p-8
                 flex flex-col items-center text-center
                 transition-all duration-300
                 hover:-translate-y-2 hover:shadow-2xl
                 max-w-xs w-full h-full"
    >
      {/* IMAGE */}
      <div className="relative w-full h-[90px] sm:h-[120px] mb-4 sm:mb-6 flex items-center justify-center">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>

      <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-blue-600 font-medium text-sm sm:text-base mb-3">
        {role}
      </p>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ================= PAGE ================= */
export default function PartnersPage() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20">

      {/* ================= HERO / HANDSHAKE SECTION ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">

        {/* Glow effects */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 sm:px-10 py-16 sm:py-20">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Partnerships Built <br /> on Trust & Integrity
            </h1>

            <p className="text-sm sm:text-lg text-white/90 leading-relaxed max-w-xl">
              We work hand in hand with Sri Lanka’s leading banks, insurance
              providers, and financial institutions to deliver secure,
              transparent, and sustainable financial solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-xs sm:text-sm">
                Banking Partners
              </span>
             
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-xs sm:text-sm">
                Financial Institutions
              </span>
            </div>
          </div>

          {/* RIGHT HANDSHAKE IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assests/patner1.png" // 🔁 use your handshake image here
              alt="Trusted Financial Partnerships"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= BANKING PARTNERS ================= */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Banking Partners
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Secure fund management and strategic banking support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <PartnerCard
            image="/assests/boci.png"
            alt="Bank of Ceylon"
            title="Bank of Ceylon (BOC)"
            role="Banking & Treasury Partner"
            description="Supports treasury operations and secure banking services."
          />
          <PartnerCard
            image="/assests/hnb.png"
            alt="Hatton National Bank"
            title="Hatton National Bank"
            role="Primary Banking Partner"
            description="Provides trusted financial solutions and transaction support."
          />
          <PartnerCard
            image="/assests/selan.png"
            alt="Seylan Bank"
            title="Seylan Bank"
            role="Banking Partner"
            description="Supports reliable and efficient banking operations."
          />
        </div>
      </section>

     
      {/* ================= FINANCIAL PARTNERS ================= */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Financial Partners
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Strengthening our services through trusted financial alliances.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center">
          <PartnerCard
            image="/assests/fin.png"
            alt="Fintrex Finance"
            title="Fintrex Finance"
            role="Financial Solutions Partner"
            description="Innovative financial solutions enhancing liquidity and growth."
          />
          <PartnerCard
            image="/assests/janashakthi.webp"
            alt="Janashakthi Finance"
            title="Janashakthi Finance"
            role="Financial Partner"
            description="Diversified credit facilities and asset-backed protection."
          /><PartnerCard image="/assests/peoplel.png"
           alt="People's Leasing" 
           title="People's Leasing" 
           role="Leasing Solutions Partner"
          description="Provides comprehensive leasing solutions to support business expansion and asset acquisition." />
           <PartnerCard 
           image="/assests/lb.png" 
           alt="LB Finance"
            title="LB Finance" 
            role="Leasing & Credit Partner"
             description="Provides flexible leasing and financing solutions that empower individuals and businesses with accessible and reliable funding options." />
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="bg-blue-50 rounded-3xl p-8 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Strengthening Trust Through Partnerships
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left font-medium text-gray-800">
          <li>✔ Secure fund management</li>
          <li>✔ Comprehensive risk mitigation</li>
          <li>✔ Regulatory compliance</li>
          <li>✔ Sustainable investor returns</li>
        </ul>
      </section>

    </div>
  );
}

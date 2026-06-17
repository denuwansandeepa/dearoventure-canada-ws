// app/engineer/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Engineering Services | Dearo Engineering",
};

export default function EngineerPage() {
  return (
    <main className="bg-[#f5f7fb]">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
        <Image
          src="/assests/construction.jpg"
          alt="Engineering Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Engineering Services
            </h1>
            <p className="text-white/90 max-w-2xl text-sm sm:text-base leading-relaxed">
              Delivering trusted construction and engineering solutions with
              uncompromising quality, safety, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto px-6 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-widest text-sm text-[#182359] font-semibold">
            Who We Are
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#182359] mt-3 mb-6">
            About Dearo Engineering
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Dearo Engineering (Pvt) Ltd provides professional construction,
            infrastructure development, and engineering services. We focus on
            delivering technically sound, cost-effective, and sustainable
            solutions that meet international standards.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#182359] mb-14">
            Our Engineering Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "Building Construction",
              "Infrastructure Development",
              "Project Management",
              "Renovation & Maintenance",
              "Structural Engineering",
              "Consultancy Services",
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] rounded-xl p-8 text-center
                           border border-gray-100
                           hover:border-[#182359]/30
                           transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#182359] mb-4">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reliable and professionally managed solutions delivered with
                  precision, safety, and efficiency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#182359] mb-14">
            Why Choose Dearo Engineering
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Experienced Engineering Team",
              "Strict Quality Control",
              "Safety & Compliance Focused",
              "Timely Project Completion",
            ].map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center
                           border border-gray-200"
              >
                <p className="font-semibold text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#182359] py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build With Confidence?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Speak with our engineering team to plan and deliver your next
            construction project successfully.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center
                       bg-white text-[#182359] font-semibold
                       px-10 py-3 rounded-lg
                       hover:bg-gray-100 transition"
          >
            Contact Our Team
          </a>
        </div>
      </section>

    </main>
  );
}

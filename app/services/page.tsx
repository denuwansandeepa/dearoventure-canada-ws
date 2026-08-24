import Image from "next/image";
import ServiceSection from "../components/ServiceSection";

export const metadata = {
  title: "Our Subsidiaries & Ventures | Dearo Venture Canada Ltd",
  description:
    "Explore the diversified subsidiaries and strategic ventures under Dearo Venture Canada Ltd.",
};

export default function ServicesPage() {
  return (
    <main className="bg-gray-50">
      {/* TOP HERO BANNER */}
      <div className="relative w-full mt-[48px] sm:mt-[52px] h-[220px] sm:h-[280px] md:h-[380px]">
        <Image
          src="/images/banners/services.jpg"
          alt="Dearo Venture Canada Ltd Services and Subsidiaries"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center px-4 sm:px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            Our Subsidiaries & <span className="text-blue-400">Ventures</span>
          </h1>
        </div>
      </div>

      {/* SERVICE SECTION */}
      <ServiceSection />
    </main>
  );
}

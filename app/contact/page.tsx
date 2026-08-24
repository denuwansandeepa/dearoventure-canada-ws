import Image from "next/image";
import ContactSection from "../components/Contact";

export const metadata = {
  title: "Contact Us | Dearo Venture Canada Ltd",
  description: "Get in touch with Dearo Venture Canada Ltd corporate headquarters or branch network.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      {/* TOP HERO BANNER */}
      <div className="relative w-full mt-[48px] sm:mt-[52px] h-[220px] sm:h-[280px] md:h-[380px]">
        <Image
          src="/images/banners/contact.jpg"
          alt="Contact Dearo Venture Canada Ltd"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            Contact <span className="text-blue-400">Dearo Venture Canada</span>
          </h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <ContactSection />
    </main>
  );
}

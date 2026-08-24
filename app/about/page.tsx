 // app/about/page.tsx
import Image from "next/image";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO IMAGE */}
      <div className="relative w-full mt-[48px] sm:mt-[52px] h-[220px] sm:h-[280px] md:h-[380px]">
        <Image
          src="/images/banners/about.jpg"
          alt="About Dearo Venture Canada Ltd"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

     

      {/* ABOUT CONTENT */}
      <AboutSection />

       {/* PREMIUM IMAGE */}
      {/* <div className="flex justify-center my-12">
        <div className="premium-frame">
          <img
            src="/assests/derector/leader1.jpg"
            alt="About Our Company"
            className="premium-image"
          />
        </div> */}
      {/* </div> */}
    </main>
  );
}

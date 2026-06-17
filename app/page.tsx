import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatusSection from "./components/StatusSection";
import ServiceSection from "./components/ServiceSection";
import News from "./components/News";
import Map from "./components/Map";
import ContactSection from "./components/Contact";
import Youtube from "./components/Youtube";

export default function HomePage() {
  return (
    <main>
      <HeroSection /> 
      <AboutSection />
      <StatusSection />
      <Youtube />
<ServiceSection />
<News />
<ContactSection />
     
     
    </main>
  );
}
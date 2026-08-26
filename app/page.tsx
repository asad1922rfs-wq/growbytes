import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Insights } from "@/components/sections/Insights";
import { ContactCTA } from "@/components/sections/ContactCTA";

const SHOW_TEAM = true;

export default function Home() {
  return (
    <div className="min-w-[320px] overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustLogos />
      <Services />
      <Work />
      <TechStack />
      <About />
      <Stats />
      <Testimonials />
      <Process />
      {SHOW_TEAM && <Team />}
      <Insights />
      <ContactCTA />
      <Footer />
    </div>
  );
}

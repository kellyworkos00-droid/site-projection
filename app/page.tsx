import Hero from "@/components/Hero";
import WhatIsKelly from "@/components/WhatIsKelly";
import HowItWorks from "@/components/HowItWorks";
import KellyAI from "@/components/KellyAI";
import Modules from "@/components/Modules";
import RealTimeConnection from "@/components/RealTimeConnection";
import BranchSupport from "@/components/BranchSupport";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import FutureVision from "@/components/FutureVision";
import FinalCTA from "@/components/FinalCTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AutoScroll from "@/components/AutoScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import KellyAIChat from "@/components/KellyAIChat";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full pt-24">
      <AutoScroll />
      <FloatingWhatsApp />
      <KellyAIChat />
      <Navigation />
      <Hero />
      <WhatIsKelly />
      <KellyAI />
      <HowItWorks />
      <Modules />
      <RealTimeConnection />
      <BranchSupport />
      <WhoItsFor />
      <Pricing />
      <FutureVision />
      <FinalCTA />
      <Footer />
    </main>
  );
}

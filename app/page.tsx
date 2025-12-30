import Hero from "@/components/Hero";
import WhatIsKelly from "@/components/WhatIsKelly";
import HowItWorks from "@/components/HowItWorks";
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <AutoScroll />
      <Navigation />
      <Hero />
      <WhatIsKelly />
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

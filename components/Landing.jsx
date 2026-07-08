import CursorMount from "@/components/CursorMount";
import { CheckoutProvider } from "@/components/Checkout";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsIptv from "@/components/WhatIsIptv";
import WorksOnDevices from "@/components/WorksOnDevices";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import Showcase from "@/components/Showcase";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <CheckoutProvider>
      <div className="noise" aria-hidden />
      <CursorMount />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <WhatIsIptv />
        <WorksOnDevices />
        <Pricing />
        <Steps />
        <Showcase />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </CheckoutProvider>
  );
}

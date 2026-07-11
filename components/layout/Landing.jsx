import CursorMount from "@/components/animations/CursorMount";
import { CheckoutProvider } from "@/components/forms/Checkout";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIsIptv from "@/components/sections/WhatIsIptv";
import WorksOnDevices from "@/components/sections/WorksOnDevices";
import Pricing from "@/components/sections/Pricing";
import Steps from "@/components/sections/Steps";
import Showcase from "@/components/sections/Showcase";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

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

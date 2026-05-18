"use client"

import ActionSection from "@/components/landingPage/ActionSection"
import ContactSection from "@/components/landingPage/ContactSection"
import DemoSection from "@/components/landingPage/DemoSection"
import FeaturesSection from "@/components/landingPage/FeaturesSection"
import FooterSection from "@/components/landingPage/Footer"
import HeroSection from "@/components/landingPage/HeroSection"
import StepsSection from "@/components/landingPage/StepsSection"
import Navbar from "@/components/landingPage/Navbar"

export default function LandingPage() {
  return (
    <div className="pt-24 mx-auto max-w-7xl">
      <Navbar />

      <section id="hero" className="scroll-mt-28">
        <HeroSection />
      </section>

      <section id="how-it-works" className="scroll-mt-28">
        <StepsSection />
      </section>

      <section id="use-cases" className="scroll-mt-28">
        <ActionSection />
      </section>

      <section id="features" className="scroll-mt-28">
        <FeaturesSection />
      </section>

      <section id="demo" className="scroll-mt-28">
        <DemoSection />
      </section>

      <section id="contact" className="scroll-mt-28">
        <ContactSection />
      </section>

      <FooterSection />
    </div>
  )
}

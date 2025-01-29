import React from "react";
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamMember";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main 
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/global-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-[#01619b]/80" />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </div>
    </main>
  );
}
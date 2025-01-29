import FeaturesSection from "@/components/about/FeaturesSection";
import PageTitle from "@/components/PageTitle";
import TeamSection from "@/components/about/TeamSection";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Global background image with overlay */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/images/hero-bg.avif')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-customBlue/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section with PageTitle */}
        <div className="relative">
          <PageTitle
            title="ABOUT"
            highlight="US"
            description="Delivering excellence in project management through innovative solutions, proven methodologies, and decades of industry expertise"
            image="/images/about-us.jpeg"
          />
        </div>

        {/* Team Section */}
        <div className="relative bg-transparent">
          <TeamSection />
        </div>
        <FeaturesSection />
      </div>
    </div>
  );
}

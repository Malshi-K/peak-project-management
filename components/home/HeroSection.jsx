import React from "react";
import { Building2, ArrowRight } from "lucide-react";
import GradientButton from "../GradientButton";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] h-screen">
      {/* Background Container */}
      <div className="absolute inset-0 md:rounded-br-[400px] overflow-hidden">
        <img
          src="/images/hero-bg.avif"
          alt="Hero background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-customSlate/90 to-transparent sm:from-customSlate/80" />
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 
        min-h-[inherit] flex items-center"
      >
        <div className="max-w-2xl p-4 rounded-lg backdrop-blur-sm">
          {/* Headings */}
          <div className="space-y-3 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">PEAK</span>{" "}
              <span className="text-skyBlue">Project</span>
            </h1>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium">
              Management Excellence
            </h2>
          </div>

          {/* Description */}
          <p className="text-white text-base sm:text-lg my-6 sm:my-8 max-w-xl leading-relaxed">
            Delivering exceptional construction project management services with
            expertise, efficiency, and proven methodologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <GradientButton className="w-full sm:w-auto justify-center">
                <span className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  Our Projects
                  <Building2 className="w-5 h-5" />
                </span>
              </GradientButton>
            </Link>

            <Link href="/contact">
              <GradientButton className="w-full sm:w-auto justify-center">
                <span className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </span>
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

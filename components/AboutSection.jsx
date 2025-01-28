import React from "react";
import GradientButton from "./GradientButton";
import { Building2, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="relative py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            {/* Grey Shape Background */}
            <div
              className="absolute -left-4 sm:-left-8 lg:-left-20 top-30 w-[100%] h-[100%] 
              bg-[#d0cecf] rounded-tr-[50px] sm:rounded-tr-[75px] lg:rounded-tr-[100px] -z-10"
            />

            {/* Main Image */}
            <div className="relative">
              <img
                src="/images/about-bg.png"
                alt="Construction Project"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Stats Overlay */}
              <div
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 
                bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm"
              >
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sky-600 text-2xl sm:text-3xl font-bold">
                      15+
                    </p>
                    <p className="text-slate-700 text-xs sm:text-sm">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-sky-600 text-2xl sm:text-3xl font-bold">
                      200+
                    </p>
                    <p className="text-slate-700 text-xs sm:text-sm">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-slate-800 space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <p className="text-white uppercase tracking-wider text-sm font-bold">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Excellence in Project Management
              </h2>
            </div>

            <p className="text-white leading-relaxed">
              Peak Project Management is a leading construction project
              management firm dedicated to delivering exceptional results across
              New Zealand. As an SHE Pre-Qual certified and APSCA registered
              company, we bring professional expertise and proven methodologies
              to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-4">
              <div className="flex items-start gap-3">
                <Building2 className="text-white w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Expert Management
                  </h4>
                  <p className="text-sm text-white">
                    Comprehensive project oversight
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-white w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Dedicated Teams
                  </h4>
                  <p className="text-sm text-white">
                    Professional staff & partners
                  </p>
                </div>
              </div>
            </div>

            <p className="text-white leading-relaxed">
              From commercial developments to industrial facilities, we ensure
              every project is delivered on time, within budget, and to the
              highest quality standards. Our commitment to safety, efficiency,
              and excellence has made us a trusted partner in the construction
              industry.
            </p>

            <div className="pt-2">
              <GradientButton className="w-full sm:w-auto justify-center">
                Discover Our Approach
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

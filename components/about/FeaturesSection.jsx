import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "What We've Passed",
      subtitle: "PRE 2021-NOW",
      goal: "Breakthrough Technical Discovery",
      image: "/images/hero-bg.avif",
    },
    {
      title: "Where We Are",
      subtitle: "2021-NOW",
      goal: "First Manufacturing Milestone",
      image: "/images/hero-bg.avif",
    },
    {
      title: "Where We Are Going",
      subtitle: "2023-FUTURE",
      goal: "Large Scale Deployment",
      image: "/images/hero-bg.avif",
    },
  ];

  return (
    <div className="bg-customSlate">
      <div className="py-16 bg-white rounded-br-[200px]">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                {/* Card Container */}
                <div className="relative w-full max-w-[320px] mx-auto">
                  {/* Title Section with Green Background */}
                  <div 
                    className="absolute -top-3 left-0 right-4 bg-customGreen py-3 px-4 z-20"
                    style={{
                      borderRadius: "40px 0 40px 0",
                    }}
                  >
                    <h3 className="text-white text-lg font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Main Card */}
                  <div
                    className="relative h-[360px] w-full overflow-hidden bg-customGreen"
                    style={{
                      borderRadius: "60px 0 60px 0",
                    }}
                  >
                    {/* Background Image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-70"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/80 text-sm mb-1">GOAL:</p>
                      <p className="text-white text-lg font-semibold">
                        {feature.goal}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className="absolute inset-0 bg-customBlue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      borderRadius: "60px 0 60px 0",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
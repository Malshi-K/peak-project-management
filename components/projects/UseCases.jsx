import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Factory, Gauge, Leaf } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      title: "Real-Time Project Tracking",
      description:
        "Advanced project monitoring system that provides real-time updates on construction progress. Track labour hours, material usage, and equipment allocation across multiple sites simultaneously. Improve decision-making with instant access to critical project metrics and performance indicators.",
      image: "/images/project-hero-bg.jpg",
      icon: <Gauge className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
    {
      title: "Resource Optimisation",
      description:
        "Streamline resource allocation across multiple construction sites. Our intelligent system manages equipment scheduling, workforce deployment, and material delivery coordination. Minimise downtime and maximise efficiency with automated resource tracking and predictive maintenance alerts.",
      image: "/images/project-hero-bg.jpg",
      icon: <Factory className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
    {
      title: "Sustainable Construction",
      description:
        "Implement eco-friendly construction practices with our comprehensive sustainability tracking. Monitor environmental impact, manage waste reduction, and ensure compliance with green building standards. Generate detailed sustainability reports and certifications for stakeholders.",
      image: "/images/project-hero-bg.jpg",
      icon: <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
  ];

  return (
    <section className="bg-customSlate">
      <div className="bg-white rounded-br-[100px] sm:rounded-br-[150px] md:rounded-br-[200px]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-customGreen font-bold mb-6 sm:mb-8 md:mb-12 text-center">
            Use Cases
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {cases.map((useCase, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-tl-[30px] sm:rounded-tl-[40px] md:rounded-tl-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="relative h-36 sm:h-40 md:h-48">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Icon Circle */}
                  <div
                    className="absolute -bottom-5 sm:-bottom-6 right-2 
                              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                              rounded-full flex items-center justify-center 
                              bg-gradient-to-r from-[#5fcac2] to-[#117ac0] shadow-md z-10"
                  >
                    {useCase.icon}
                  </div>
                </div>

                <CardHeader className="pt-6 sm:pt-8">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {useCase.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 gap-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 first:bg-customBlue"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

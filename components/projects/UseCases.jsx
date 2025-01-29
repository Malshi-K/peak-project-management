import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Factory, Gauge, Leaf } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      title: "Real-Time Project Tracking",
      description:
        "Advanced project monitoring system that provides real-time updates on construction progress. Track labor hours, material usage, and equipment allocation across multiple sites simultaneously. Improve decision-making with instant access to critical project metrics and performance indicators.",
      image: "/images/project-hero-bg.jpg",
      icon: <Gauge className="w-10 h-10 text-white" />,
    },
    {
      title: "Resource Optimization",
      description:
        "Streamline resource allocation across multiple construction sites. Our intelligent system manages equipment scheduling, workforce deployment, and material delivery coordination. Minimize downtime and maximize efficiency with automated resource tracking and predictive maintenance alerts.",
      image: "/images/project-hero-bg.jpg",
      icon: <Factory className="w-10 h-10 text-white" />,
    },
    {
      title: "Sustainable Construction",
      description:
        "Implement eco-friendly construction practices with our comprehensive sustainability tracking. Monitor environmental impact, manage waste reduction, and ensure compliance with green building standards. Generate detailed sustainability reports and certifications for stakeholders.",
      image: "/images/project-hero-bg.jpg",
      icon: <Leaf className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section className="bg-customSlate">
      <div className="bg-white rounded-br-[200px]">
        <div className="w-full max-w-6xl mx-auto p-6">
          <h2 className="text-5xl text-customGreen font-bold mb-8 text-center">Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((useCase, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-tl-[50px] rounded-br-[50px] hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="relative h-48">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Icon Circle */}
                  <div
                    className="absolute -bottom-6 right-2 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-[#5fcac2] to-[#117ac0] shadow-md z-10"
                  >
                    {useCase.icon}
                  </div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-3 h-3 rounded-full bg-gray-300 first:bg-customBlue"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
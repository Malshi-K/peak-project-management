import React from 'react';
import { Building2, ClipboardCheck, HardHat, Users2, ChartBar, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ Icon, title, description }) => (
  <div className="p-8 backdrop-blur-sm group transition-all hover:bg-slate-800/20 rounded-lg">
    <div className="w-12 h-12 text-skyBlue mb-4">
      {Icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      Icon: <Building2 className="w-full h-full" />,
      title: "Project Management",
      description: "Comprehensive construction project management services ensuring timely delivery, cost efficiency, and quality outcomes for commercial and industrial projects."
    },
    {
      Icon: <HardHat className="w-full h-full" />,
      title: "Site Safety Management",
      description: "SHE Pre-Qual certified safety management protocols, ensuring workplace safety compliance and risk mitigation across all construction phases."
    },
    {
      Icon: <ClipboardCheck className="w-full h-full" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and APSCA registered practices to maintain the highest standards in construction delivery."
    },
    {
      Icon: <Users2 className="w-full h-full" />,
      title: "Team Coordination",
      description: "Expert coordination of contractors, suppliers, and stakeholders to ensure seamless project execution and communication."
    },
    {
      Icon: <ChartBar className="w-full h-full" />,
      title: "Progress Monitoring",
      description: "Advanced project tracking and reporting systems to keep stakeholders informed and projects on schedule."
    },
    {
      Icon: <ShieldCheck className="w-full h-full" />,
      title: "Compliance Management",
      description: "Ensuring all projects meet local regulations, building codes, and industry standards with comprehensive documentation."
    }
  ];

  return (
    <div>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Delivering comprehensive construction project management solutions with a focus on safety, quality, and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "James Maternga",
      role: "Director / Senior Project Manager",
      description: "Over 15 years of experience in construction project management, specializing in commercial and industrial projects with a focus on safety and efficiency.",
      email: "james@peakpro.co.nz",
      phone: "027 404 7414",
      linkedIn: "#",
      image: "/images/member-1.jpeg"  // Replace with actual photo path
    },
    {
      name: "Sarah Thompson",
      role: "Head of Operations",
      description: "Leading our operational excellence with expertise in quality assurance and team coordination across multiple construction projects.",
      email: "sarah@peakpro.co.nz",
      phone: "027 XXX XXXX",
      linkedIn: "#",
      image: "/images/member-2.jpg"  // Replace with actual photo path
    },
    {
      name: "David Chen",
      role: "Safety Compliance Manager",
      description: "Ensuring adherence to SHE Pre-Qual standards and maintaining our exceptional safety record across all project sites.",
      email: "david@peakpro.co.nz",
      phone: "027 XXX XXXX",
      linkedIn: "#",
      image: "/images/member-3.avif"  // Replace with actual photo path
    }
  ];

  return (
    <div className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-start justify-between mb-16 max-w-6xl mx-auto flex-col md:flex-row gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">Our Leadership Team</h2>
            <p className="mt-2 text-sky-600">
              Meet the Experts Behind Peak →
            </p>
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            Our experienced team brings together decades of construction project management expertise, 
            delivering excellence through innovation and proven methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative w-64 h-64 mx-auto">
                {/* Photo Frame */}
                <div className={`relative w-60 h-60 overflow-hidden border-l-8 border-t-8 
                  ${index % 3 === 0 ? 'border-sky-500' : index % 3 === 1 ? 'border-blue-600' : 'border-slate-700'}`}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sky-600 font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600 text-sm max-w-sm mx-auto">{member.description}</p>
                
                {/* Contact Buttons */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-sky-600 rounded-full hover:bg-sky-700 transition-colors"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                    title={`Call ${member.name}`}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={member.linkedIn}
                    className="inline-flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full hover:bg-slate-800 transition-colors"
                    title={`${member.name}'s LinkedIn Profile`}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
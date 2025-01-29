import React from "react";
import { teamMembers } from "@/data/teamData";

const TeamShowcase = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          One Spirit One Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="w-32 h-32 rounded-tl-[60px] rounded-bl-[60px] rounded-br-[60px] overflow-hidden shadow-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg">
                  {member.name}
                </h3>
                <p className="text-blue-100 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
import React from "react";
import { teamMembers } from "@/data/teamData";

const TeamSection = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/80 uppercase tracking-wider mb-2">
            ABOUT US
          </p>
          <h2 className="text-3xl font-bold text-white">Team Divigas</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-x-16 gap-y-20 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              {/* Member Container */}
              <div className="relative">
                {/* Frame Background */}
                <div
                  className={`absolute -left-[10px]"
                  } top-0 w-[300px] h-[300px]`}
                >
                  <div
                    className="w-full h-full bg-customGreen"
                    style={{
                      borderRadius: "200px 0 200px 200px",
                    }}
                  />
                </div>

                {/* Content Container */}
                <div className="relative flex flex-col">
                  {/* Image Container */}
                  <div className="relative">
                    {/* Profile Image */}
                    <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative z-10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div
                    className={`text-white mt-6 max-w-md ${
                      index % 2 === 0 ? "pr-4" : "pl-4"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-customSlate text-lg mb-4">
                      {member.role}
                    </p>
                    <p className="text-white/80 text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
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

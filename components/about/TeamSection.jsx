import React from "react";
import { teamMembers } from "@/data/teamData";

const TeamSection = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-white/80 uppercase tracking-wider mb-2 text-sm sm:text-base">
            ABOUT US
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Team Divigas
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative flex justify-center">
              {/* Member Container */}
              <div className="relative w-full max-w-[320px]">
                {/* Frame Background */}
                <div className="absolute -left-[10px] sm:-left-[10px] top-0 w-full aspect-square">
                  <div
                    className="w-full h-full bg-customGreen"
                    style={{
                      borderRadius: "200px 0 200px 200px",
                    }}
                  />
                </div>

                {/* Content Container */}
                <div className="relative flex flex-col items-center sm:items-start">
                  {/* Image Container */}
                  <div className="relative w-full">
                    {/* Profile Image */}
                    <div className="w-[calc(100%-20px)] aspect-square rounded-full overflow-hidden relative z-10 mx-auto sm:mx-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-white mt-6 w-full px-4 sm:px-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center sm:text-left">
                      {member.name}
                    </h3>
                    <p className="text-customSlate text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">
                      {member.role}
                    </p>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center sm:text-left">
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
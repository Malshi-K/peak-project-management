import React from "react";
import { Phone, MapPin, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "Facebook"
    }
  ];

  return (
    <div className="relative min-h-screen bg-customSlate overflow-hidden">
      {/* Background Image Container with rounded corner */}
      <div className="absolute inset-0 sm:rounded-br-[100px] md:rounded-br-[200px] overflow-hidden">
        <img
          src="/images/hero-bg.avif"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-customBlue/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10">
                Contact Peak Project Management
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-customSlate" />
                  <div>
                    <p className="font-semibold text-base sm:text-lg text-customSlate uppercase tracking-wide">
                      24/7 SUPPORT
                    </p>
                    <p className="text-base sm:text-lg">027 404 7414</p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Director / Senior Project Manager
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-customSlate" />
                  <div>
                    <p className="font-semibold text-base sm:text-lg text-customSlate uppercase tracking-wide">
                      PROJECT INQUIRIES
                    </p>
                    <p className="text-base sm:text-lg">james@peakpro.co.nz</p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      For quotes and consultations
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 sm:mt-10">
                <p className="font-semibold text-base sm:text-lg text-customSlate uppercase tracking-wide mb-3 sm:mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-customGreen rounded-full flex items-center justify-center hover:bg-blue-500/50 transition-colors duration-300 group"
                    >
                      {React.cloneElement(social.icon, {
                        className: "w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300"
                      })}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-base sm:text-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-base sm:text-lg"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-base sm:text-lg"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message Here"
                    rows={4}
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-base sm:text-lg resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-white/80 text-xs sm:text-sm">
                    I agree to the terms and conditions and the privacy policy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold text-base sm:text-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
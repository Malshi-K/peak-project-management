import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-customSlate overflow-hidden">
      {/* Background Image Container with rounded corner */}
      <div className="absolute inset-0 md:rounded-br-[200px] overflow-hidden">
        <img
          src="/images/hero-bg.avif"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-customBlue/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-10">
                Contact Peak Project Management
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 text-customSlate" />
                  <div>
                    <p className="font-semibold text-lg text-customSlate uppercase tracking-wide">
                      24/7 SUPPORT
                    </p>
                    <p className="text-lg">027 404 7414</p>
                    <p className="text-sm text-gray-300">
                      Director / Senior Project Manager
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 text-customSlate" />
                  <div>
                    <p className="font-semibold text-lg text-customSlate uppercase tracking-wide">
                      PROJECT INQUIRIES
                    </p>
                    <p className="text-lg">james@peakpro.co.nz</p>
                    <p className="text-sm text-gray-300">
                      For quotes and consultations
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-10">
                <a
                  href="#"
                  className="w-10 h-10 bg-customGreen rounded-full flex items-center justify-center hover:bg-blue-500/50 transition-colors"
                >
                  <span className="text-white font-medium">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-customGreen rounded-full flex items-center justify-center hover:bg-blue-500/50 transition-colors"
                >
                  <span className="text-white font-medium">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-customGreen rounded-full flex items-center justify-center hover:bg-blue-500/50 transition-colors"
                >
                  <span className="text-white font-medium">t</span>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-lg"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-lg"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message Here"
                    rows={4}
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-customSlate text-lg resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="mt-1.5" />
                  <label htmlFor="consent" className="text-white/80 text-sm">
                    I agree to the terms and conditions and the privacy policy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold text-lg"
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

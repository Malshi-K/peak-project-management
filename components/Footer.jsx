import React from 'react';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-customSlate text-white">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bottom right circle */}
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-blue-600/10" />
        {/* Bottom left circle - smaller and more transparent */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-600/5" />
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info Section */}
            <div>
              <img src="/images/logo.jpeg" alt="Peak Project Management" className="h-12 w-auto mb-4" />
              <p className="text-slate-300 text-sm">
                Excellence in Construction Project Management. 
              </p>
              <div className="flex gap-4 mt-6">
                <a href="tel:027 404 7414" className="flex items-center gap-2 text-sm text-slate-300 hover:text-skyBlue">
                  <Phone className="w-4 h-4" />
                  027 404 7414
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="/services/project-management" className="hover:text-skyBlue">Project Management</a></li>
                <li><a href="/services/safety-management" className="hover:text-skyBlue">Safety Management</a></li>
                <li><a href="/services/quality-assurance" className="hover:text-skyBlue">Quality Assurance</a></li>
                <li><a href="/services/team-coordination" className="hover:text-skyBlue">Team Coordination</a></li>
                <li><a href="/services/compliance" className="hover:text-skyBlue">Compliance Management</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="/industries/commercial" className="hover:text-skyBlue">Commercial Construction</a></li>
                <li><a href="/industries/industrial" className="hover:text-skyBlue">Industrial Projects</a></li>
                <li><a href="/industries/residential" className="hover:text-skyBlue">Residential Development</a></li>
                <li><a href="/industries/infrastructure" className="hover:text-skyBlue">Infrastructure</a></li>
                <li><a href="/industries/renovation" className="hover:text-skyBlue">Renovation Projects</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-2 text-slate-300">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>Auckland, New Zealand</span>
                </p>
                <a 
                  href="mailto:james@peakpro.co.nz" 
                  className="flex items-center gap-2 text-slate-300 hover:text-skyBlue"
                >
                  <Mail className="w-5 h-5" />
                  james@peakpro.co.nz
                </a>
                <div className="flex items-center gap-4 mt-4">
                  <a 
                    href="#linkedin" 
                    className="text-slate-300 hover:text-skyBlue"
                    title="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-400">
            <p>Copyright © {new Date().getFullYear()} GDC Digital Solutions. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
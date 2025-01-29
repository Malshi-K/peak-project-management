"use client";
import React, { useState, useEffect } from "react";
import GradientButton from "./GradientButton";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
  ];

  return (
    <>
      {/* Placeholder div to prevent content jump when nav becomes fixed */}
      <div className="h-[72px]" />
      
      <nav className={`fixed top-0 left-0 right-0 bg-white transition-all duration-300 z-50 
        ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b">
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.jpeg"
              alt="Peak Project Management"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-skyBlue transition-colors text-lg font-bold"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <GradientButton className="w-full sm:w-auto justify-center">
                <span className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  Get in Touch
                </span>
              </GradientButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-sky-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact">
                  <GradientButton className="w-full justify-center">
                    Get in Touch
                  </GradientButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
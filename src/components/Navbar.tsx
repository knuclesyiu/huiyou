import React, { useState } from "react";
import logo from "../assets/logo.png";
import detailed_logo from "../assets/detailed_logo.png";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b-gray-100 shadow-sm">
        <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
          {/* // Logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              className="hidden md:block h-20 transition-all"
              src={detailed_logo}
              alt="full_huiyou"
            />
            <img
              className="block md:hidden h-12 transition-all"
              src={logo}
              alt="huiyou"
            />
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <HiMenu className="size-6" />
            )}
          </button>

          {/* desktop navitems */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-(--color-primary) after:transition-all ${
                  activeLink === link.label ? "after:w-full" : "after:w-0"
                }`}
                onClick={() => setActiveLink(link.label)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Get in Touch btn */}
          <button className="hidden md:block bg-white/90 border-1 text-black px-6 py-2.5 rounded-lg hover:bg-(--color-primary) hover:text-white text-sm font-medium transition-all hover:shadow-lg">
            <a href="#contactus">Contact Us</a>
          </button>
        </div>

        {/* mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-(--color-primary)"
                      : "text-gray-600 hover:text-(--color-primary)"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <button className="w-full bg-white border-1 text-black px-6 py-2.5 rounded-lg hover:bg-(--color-primary) hover:text-white text-sm font-medium transition-all hover:shadow-lg">
                <a href="#contactus">Contact Us</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

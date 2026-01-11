"use client";
import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-slate-300 text-slate-900 pt-14 pb-6 rounded-t-3xl relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/public/skiez-tech logo.png"
              alt="Ataraxis Logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-lg font-semibold tracking-wide">SKIEZ TECHNOLOGIES</h2>
          </div>
          <p className="text-gray-900 leading-relaxed text-sm md:text-base max-w-sm">
            Empowering physicians with advanced multi-modal tools to improve
            treatment selection and patient outcomes.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6 text-gray-900">
            <a href="#" aria-label="X / Twitter">
              <FaXTwitter className="text-xl hover:text-white transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl hover:text-white transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-white transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-white transition" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
            >
              <IoIosArrowUp className="text-lg" />
              BACK TO TOP
            </button>
          </div>
        </div>

        {/* Middle Section - Site Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Site Map</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Homepage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            
          </ul>
        </div>

        {/* Right Section - Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Cookie's Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#D4943F] text-[#103B3F] text-center py-3 text-sm font-medium mt-6 rounded-b-3xl">
        Copyright © 2026, skiez technologies, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

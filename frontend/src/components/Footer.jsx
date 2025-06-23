import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">A-EVENTS</h2>
          <p className="text-gray-400">
            Making your celebrations unforgettable with premium decorating and event styling.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91-8619107503</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>hello@A-EVENTS.in</span>
            </li>
            <li className="flex gap-4 mt-4 text-lg">
              <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} A-EVENTS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

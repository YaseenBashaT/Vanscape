
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vanscape-slate text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">VacayVanscape</h3>
            <p className="text-gray-300 mb-6">
              The perfect van rental service for your next adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/vans" className="text-gray-300 hover:text-white">Browse Vans</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white">Destinations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="/cancellation" className="text-gray-300 hover:text-white">Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Adventure Road<br />
                  Portland, OR 97205
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@vacayvanscape.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} VacayVanscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

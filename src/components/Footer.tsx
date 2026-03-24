import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-3xl">🦷</span>
              <span className="tracking-tight">THE TOOTH</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your Smile, Our Priority. Providing world-class dental care with advanced technology and compassionate service in Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-teal-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">General Dentistry</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Teeth Whitening</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Root Canal</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Dental Implants</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Braces & Aligners</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span>Nasr Plaza, Plot No 158, above UCO Bank, beside Honda Showroom, Surya Nagar, Toli Chowki, Hyderabad, 500008</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="tel:+919966340056" className="hover:text-teal-400 transition-colors">+91 9966340056</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:info@thetooth.in" className="hover:text-teal-400 transition-colors">info@thetooth.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} The Tooth Dental Studio. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

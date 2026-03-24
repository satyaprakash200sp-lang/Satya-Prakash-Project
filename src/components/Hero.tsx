import { motion } from 'motion/react';
import { Calendar, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 md:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wider mb-4">
              WELCOME TO THE TOOTH DENTAL STUDIO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Smile, <br className="hidden md:block" />
              <span className="text-teal-600">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
              Experience world-class dental care in Hyderabad. We combine advanced technology with compassionate care to give you the perfect smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+919966340056"
                className="inline-flex justify-center items-center gap-2 bg-white text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

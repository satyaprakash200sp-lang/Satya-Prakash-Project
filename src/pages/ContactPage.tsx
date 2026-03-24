import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Location from '../components/Location';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact & Appointment</h1>
            <p className="text-lg text-gray-600">
              We are here to help you achieve the perfect smile. Reach out to us to book an appointment or ask any questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-4 rounded-full text-teal-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance or to book an appointment.</p>
                    <a href="tel:+919966340056" className="text-teal-600 hover:text-teal-700 font-semibold text-lg">+91 9966340056</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-4 rounded-full text-teal-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Clinic Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nasr Plaza, Plot No 158, above UCO Bank,<br />
                      beside Honda Showroom, Surya Nagar,<br />
                      Toli Chowki, Hyderabad, Telangana 500008
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-4 rounded-full text-teal-600 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Working Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p className="flex justify-between w-48"><span>Mon - Sat:</span> <span>10:00 AM – 8:00 PM</span></p>
                      <p className="flex justify-between w-48"><span>Sunday:</span> <span>By Appointment</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-4 rounded-full text-teal-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Send us your queries anytime.</p>
                    <a href="mailto:info@thetooth.in" className="text-teal-600 hover:text-teal-700 font-semibold">info@thetooth.in</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
                    placeholder="+91 99663 40056"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
                  >
                    <option>General Checkup</option>
                    <option>Teeth Cleaning</option>
                    <option>Root Canal</option>
                    <option>Dental Implants</option>
                    <option>Braces / Aligners</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-none bg-white"
                    placeholder="Tell us about your dental issue or preferred time..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg text-lg"
                >
                  Request Appointment
                </button>
              </form>
            </motion.div>

          </div>
        </div>
        
        {/* Full width map */}
        <div className="w-full">
          <Location />
        </div>
      </div>
    </PageTransition>
  );
}

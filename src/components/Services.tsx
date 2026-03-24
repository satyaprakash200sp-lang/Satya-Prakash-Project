import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldPlus, Smile, Wrench, Baby, Syringe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive check-ups, fillings, and preventive care to maintain optimal oral health.",
      icon: <Activity className="w-10 h-10 text-teal-600" />
    },
    {
      title: "Teeth Cleaning & Polishing",
      description: "Professional scaling and polishing to remove plaque, tartar, and surface stains.",
      icon: <Sparkles className="w-10 h-10 text-teal-600" />
    },
    {
      title: "Root Canal Treatment",
      description: "Painless endodontic therapy to save infected or severely decayed teeth.",
      icon: <Syringe className="w-10 h-10 text-teal-600" />
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth to restore your smile.",
      icon: <ShieldPlus className="w-10 h-10 text-teal-600" />
    },
    {
      title: "Teeth Whitening",
      description: "Safe and effective whitening treatments for a brighter, more radiant smile.",
      icon: <Smile className="w-10 h-10 text-teal-600" />
    },
    {
      title: "Braces & Aligners",
      description: "Orthodontic solutions including traditional braces and clear aligners for straight teeth.",
      icon: <Wrench className="w-10 h-10 text-teal-600" />
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and friendly dental care specially designed for children and infants.",
      icon: <Baby className="w-10 h-10 text-teal-600" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Solutions
          </h3>
          <p className="text-lg text-gray-600">
            We offer a wide range of dental treatments under one roof, tailored to meet the unique needs of every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-teal-50 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

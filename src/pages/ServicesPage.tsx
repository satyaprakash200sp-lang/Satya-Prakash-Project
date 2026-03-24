import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Sparkles, Activity, ShieldPlus, Smile, Wrench, Baby, Syringe } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive check-ups, digital X-rays, fillings, and preventive care to maintain optimal oral health and catch issues early.",
      icon: <Activity className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Teeth Cleaning & Polishing",
      description: "Professional scaling and polishing to remove stubborn plaque, tartar, and surface stains, preventing gum disease and bad breath.",
      icon: <Sparkles className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced, painless endodontic therapy to save infected or severely decayed teeth, avoiding the need for extraction.",
      icon: <Syringe className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth. Implants restore your smile, chewing ability, and facial structure.",
      icon: <ShieldPlus className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Teeth Whitening",
      description: "Safe and highly effective professional whitening treatments for a significantly brighter, more radiant smile in just one visit.",
      icon: <Smile className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Braces & Aligners",
      description: "Orthodontic solutions including traditional metal/ceramic braces and invisible clear aligners for perfectly straight teeth.",
      icon: <Wrench className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle, friendly, and specialized dental care designed specifically for children and infants to ensure a lifetime of healthy smiles.",
      icon: <Baby className="w-12 h-12 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Dental Services</h1>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of dental treatments under one roof, utilizing advanced technology to deliver exceptional results.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="bg-teal-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2 text-teal-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      Expert Consultation
                    </li>
                    <li className="flex items-center gap-2 text-teal-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      Advanced Techniques
                    </li>
                    <li className="flex items-center gap-2 text-teal-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      Comfortable Experience
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

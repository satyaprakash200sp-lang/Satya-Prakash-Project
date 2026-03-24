import { motion } from 'motion/react';
import { ShieldCheck, Stethoscope, HeartPulse } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      title: "Strict Hygiene",
      description: "We follow international sterilization protocols to ensure your utmost safety."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      title: "Advanced Technology",
      description: "Equipped with the latest dental technology for precise and painless treatments."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
      title: "Patient-First Care",
      description: "Your comfort is our priority. We ensure a stress-free and relaxing experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dentist examining patient"
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <span className="text-2xl font-bold text-teal-600">10+</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Years of</p>
                    <p className="text-gray-600">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Committed to Excellence in Dental Care
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At <strong>The Tooth Dental Studio</strong>, we believe that a healthy smile is the foundation of overall well-being. Located in the heart of Toli Chowki, Hyderabad, our clinic is dedicated to providing comprehensive, high-quality dental care in a comfortable and welcoming environment.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 bg-teal-50 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

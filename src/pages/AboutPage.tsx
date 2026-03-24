import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { ShieldCheck, Stethoscope, HeartPulse, Target, Eye, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
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
    <PageTransition>
      <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About The Tooth Dental Studio</h1>
            <p className="text-lg text-gray-600">
              Committed to providing world-class dental care with a gentle touch in the heart of Hyderabad.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dentist examining patient"
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At <strong>The Tooth Dental Studio</strong>, we believe that a healthy smile is the foundation of overall well-being. Located in Toli Chowki, Hyderabad, our clinic was founded with a simple mission: to make high-quality dental care accessible, comfortable, and stress-free.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of highly qualified and experienced dentists utilizes state-of-the-art technology to deliver precise diagnoses and effective treatments. Whether you need a routine check-up or a complex smile makeover, we are here to help.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Target className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To provide exceptional dental care that improves the oral health and overall quality of life of our patients.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Eye className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the most trusted and preferred dental clinic in Hyderabad, known for excellence and patient satisfaction.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide our practice every day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

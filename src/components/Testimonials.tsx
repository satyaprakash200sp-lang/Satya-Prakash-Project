import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohammed Ali",
      text: "Excellent service! The clinic is very clean and hygienic. The doctor explained the root canal procedure clearly and it was completely painless. Highly recommended.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "Got my teeth whitening done here. The results are amazing! The staff is very polite and the pricing is quite affordable compared to other clinics in the area.",
      rating: 5
    },
    {
      name: "Syed Rahman",
      text: "Took my 5-year-old son for a checkup. The doctor was extremely patient and friendly, making my son feel completely at ease. Best pediatric dental experience.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h3>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Read about the experiences of our happy patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>
              <div className="font-bold text-gray-900">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

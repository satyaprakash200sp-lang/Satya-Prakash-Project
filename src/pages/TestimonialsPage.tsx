import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mohammed Ali",
      text: "Excellent service! The clinic is very clean and hygienic. The doctor explained the root canal procedure clearly and it was completely painless. Highly recommended.",
      rating: 5,
      date: "October 2023"
    },
    {
      name: "Priya Sharma",
      text: "Got my teeth whitening done here. The results are amazing! The staff is very polite and the pricing is quite affordable compared to other clinics in the area.",
      rating: 5,
      date: "September 2023"
    },
    {
      name: "Syed Rahman",
      text: "Took my 5-year-old son for a checkup. The doctor was extremely patient and friendly, making my son feel completely at ease. Best pediatric dental experience.",
      rating: 5,
      date: "August 2023"
    },
    {
      name: "Ayesha Khan",
      text: "I was very nervous about getting dental implants, but the team at The Tooth made the entire process smooth and comfortable. The results look completely natural.",
      rating: 5,
      date: "July 2023"
    },
    {
      name: "Rahul Verma",
      text: "Very professional and transparent. They don't suggest unnecessary treatments. I went in for a routine cleaning and was very impressed with their advanced equipment.",
      rating: 4,
      date: "June 2023"
    },
    {
      name: "Fatima Begum",
      text: "Started my clear aligner treatment here. The progress has been great, and the doctors are always available to answer my queries. Great clinic in Toli Chowki.",
      rating: 5,
      date: "May 2023"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Patient Testimonials</h1>
            <p className="text-lg text-gray-600">
              Read what our patients have to say about their experience at The Tooth Dental Studio. Your satisfaction is our greatest reward.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative border border-gray-100 flex flex-col h-full"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-50" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic relative z-10 flex-grow text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto border-t border-gray-50 pt-4 flex justify-between items-center">
                  <span className="font-bold text-gray-900">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

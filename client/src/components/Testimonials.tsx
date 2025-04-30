import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "nhSoftware delivered an exceptional Android app that exceeded our expectations. Their attention to detail and commitment to quality is impressive.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechSolutions",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=60&h=60",
    },
    {
      quote:
        "Working with the team at nhSoftware was a seamless experience. Their iOS app development expertise helped us launch our product ahead of schedule.",
      name: "Mark Williams",
      title: "CEO, Innovate Apps",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=60&h=60",
    },
    {
      quote:
        "The custom UI components developed by nhSoftware greatly improved our website's user engagement. Their team is responsive and professional.",
      name: "Rachel Chen",
      title: "Product Owner, WebConnect",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=60&h=60",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have experienced the quality and value of
            our mobile development services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#F3F4F6] rounded-xl p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary text-5xl absolute -top-4 left-4 opacity-20">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  width={60}
                  height={60}
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

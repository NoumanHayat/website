import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { LuLayers } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      title: "Android App Development",
      description:
        "We build native and cross-platform Android applications with beautiful interfaces and robust performance that engage your users.",
      icon: <FaAndroid className="text-2xl text-accent" />,
      iconBg: "bg-green-100",
      checkColor: "text-accent",
      features: [
        "Native Java & Kotlin development",
        "Material Design implementation",
        "Performance optimization",
        "Google Play Store deployment",
      ],
    },
    {
      title: "iOS App Development",
      description:
        "We create elegant and intuitive iOS applications that provide exceptional user experiences across all Apple devices.",
      icon: <FaApple className="text-2xl text-primary" />,
      iconBg: "bg-blue-100",
      checkColor: "text-primary",
      features: [
        "Swift & Objective-C development",
        "Human Interface Guidelines adherence",
        "SwiftUI implementation",
        "App Store submission assistance",
      ],
    },
    {
      title: "Custom UI Components",
      description:
        "We design and develop custom UI components like Floating WhatsApp Buttons that enhance user interaction and engagement.",
      icon: <LuLayers className="text-2xl text-secondary" />,
      iconBg: "bg-indigo-100",
      checkColor: "text-secondary",
      features: [
        "Interactive web elements",
        "Responsive design integration",
        "Cross-platform compatibility",
        "Customizable features",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in mobile app development and custom UI components that
            help businesses connect with their users through seamless digital
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div
                  className={`w-12 h-12 ${service.iconBg} rounded-full flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className={`h-4 w-4 mr-2 ${service.checkColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      detail: "+92 305 6719020",
    },
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      detail: "admin@nhsw.online",
    },
    {
      icon: <Globe className="text-primary" />,
      title: "Website",
      detail: "nhsw.online",
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="text-xl" />, label: "Facebook" },
    { icon: <Twitter className="text-xl" />, label: "Twitter" },
    { icon: <Linkedin className="text-xl" />, label: "LinkedIn" },
    { icon: <Instagram className="text-xl" />, label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Get in touch with our team to discuss how we
            can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3 bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.7 }}
                  >
                    <div className="bg-[#F3F4F6] p-3 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">{info.title}</h4>
                      <p className="text-gray-600">{info.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for the latest updates on our projects
                and technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-[#F3F4F6] hover:bg-primary hover:text-white text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

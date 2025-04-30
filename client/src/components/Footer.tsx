import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "#services", label: "Android App Development" },
    { href: "#services", label: "iOS App Development" },
    { href: "#services", label: "Custom UI Components" },
    { href: "#services", label: "UI/UX Design" },
    { href: "#services", label: "App Maintenance" },
  ];

  const contactInfo = [
    { icon: <Phone className="mt-1 mr-3 text-primary" size={16} />, detail: "+92 305 6719020" },
    { icon: <Mail className="mt-1 mr-3 text-primary" size={16} />, detail: "admin@nhsw.online" },
    { icon: <Globe className="mt-1 mr-3 text-primary" size={16} />, detail: "nhsw.online" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6">
              nh<span className="text-primary">Software</span>
            </div>
            <p className="text-gray-400 mb-6">
              Modern software development company committed to delivering cutting-edge
              mobile solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  <span className="text-gray-400">{info.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} nhSoftware. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

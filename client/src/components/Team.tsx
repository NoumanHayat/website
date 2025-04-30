import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Team() {
  const teamMembers = [
    {
      name: "Nouman Hayat",
      role: "Chief Executive Officer",
      description:
        "Leads our company vision and strategic direction, bringing 10+ years of tech industry experience.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=300",
    },
    {
      name: "Irfan Shahid",
      role: "Project Manager",
      description:
        "Oversees project lifecycle and client communication, ensuring timely delivery of high-quality solutions.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=300",
    },
    {
      name: "Shahyar Hattar",
      role: "UI/UX Designer",
      description:
        "Creates intuitive and engaging user interfaces that elevate the user experience of our applications.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=300",
    },
    {
      name: "Jamal Butt",
      role: "Senior Developer",
      description:
        "Expert in mobile application development with extensive experience in both Android and iOS platforms.",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=300",
    },
  ];

  return (
    <section id="team" className="py-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented professionals bring years of experience and passion to
            every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                width={400}
                height={300}
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <FaTwitter className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

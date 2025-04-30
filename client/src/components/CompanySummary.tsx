import { motion } from "framer-motion";

export default function CompanySummary() {
  const features = [
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile First",
      description: "User-centric design",
    },
    {
      icon: "fas fa-code",
      title: "Clean Code",
      description: "Maintainable solutions",
    },
    {
      icon: "fas fa-rocket",
      title: "Fast Delivery",
      description: "Efficient timelines",
    },
    {
      icon: "fas fa-sync",
      title: "Continuous Support",
      description: "Ongoing maintenance",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=450"
              alt="Our Team Working"
              className="rounded-xl shadow-md w-full"
              width={600}
              height={450}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              About <span className="text-primary">nhSoftware</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              nhSoftware is a modern software development company committed to
              delivering cutting-edge mobile solutions. Our team of skilled
              developers, designers, and project managers work collaboratively to
              transform your concepts into powerful, user-friendly applications.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We prioritize user experience, performance, and innovation in every
              project we undertake, ensuring your digital product stands out in
              today's competitive market.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                >
                  <div className="bg-[#F3F4F6] p-3 rounded-full mr-4">
                    <i className={`${feature.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

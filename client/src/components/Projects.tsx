import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "ShopEase",
      description: "E-commerce Android application with integrated payment system",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=450&h=300",
      tags: ["Android", "Kotlin", "Firebase"],
    },
    {
      title: "HealthTrack",
      description: "iOS fitness application with health data visualization",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=450&h=300",
      tags: ["iOS", "Swift", "HealthKit"],
    },
    {
      title: "QuickBite",
      description: "Food delivery platform with real-time order tracking",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=450&h=300",
      tags: ["Android", "iOS", "React Native"],
    },
    {
      title: "ConnectChat",
      description: "Real-time messaging application with end-to-end encryption",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=450&h=300",
      tags: ["iOS", "SwiftUI", "WebSockets"],
    },
    {
      title: "LearnWave",
      description: "Educational platform with interactive lessons and progress tracking",
      image: "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=450&h=300",
      tags: ["Android", "Kotlin", "GraphQL"],
    },
    {
      title: "FinTrack",
      description: "Personal finance management with budget planning features",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=450&h=300",
      tags: ["iOS", "Android", "Flutter"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Project Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our successful projects that demonstrate our
            expertise and commitment to quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                width={450}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 to-transparent flex items-end">
                <div className="p-6 text-white w-full">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary/20 text-white text-xs py-1 px-2 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

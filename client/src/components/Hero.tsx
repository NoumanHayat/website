import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#F3F4F6] to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas Into
              <div className="text-primary">Mobile Experiences</div>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              nhSoftware specializes in crafting high-performance mobile
              applications and interactive design solutions that bring your
              digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                <a href="#services">Explore Services</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white hover:bg-[#F3F4F6] text-primary border border-primary font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=500"
              alt="Mobile App Development"
              className="rounded-xl shadow-lg w-full"
              width={600}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

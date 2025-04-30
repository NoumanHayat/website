import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Bring Your App Idea to Life?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Let's discuss how our expertise can help transform your vision into a
            successful mobile application.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-[#F3F4F6] font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            <a href="#contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

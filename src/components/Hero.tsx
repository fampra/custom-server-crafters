import { motion } from "framer-motion";
import { Server, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Enterprise Servers
              <br />
              <span className="text-accent">Built for Performance</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            We design, build, and configure high-performance server solutions tailored to your enterprise needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="text-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
              onClick={() => document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Specifications
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Server, title: "Custom Builds", desc: "Tailored to your needs" },
              { icon: Shield, title: "Enterprise Security", desc: "Advanced protection" },
              { icon: Settings, title: "Full Configuration", desc: "Ready to deploy" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
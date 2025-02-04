import { motion } from "framer-motion";
import { Chip, Shield, Zap, Clock, Server, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Chip,
      title: "Latest Hardware",
      description: "Access to the newest enterprise-grade components and processors",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security features and compliance with industry standards",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized configurations for maximum speed and reliability",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
    },
    {
      icon: Server,
      title: "Scalable Solutions",
      description: "Easily expandable systems that grow with your business",
    },
    {
      icon: Settings,
      title: "Custom Config",
      description: "Tailored configurations to match your specific requirements",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Industry-leading features that set our solutions apart
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
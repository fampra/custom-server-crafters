import { motion } from "framer-motion";
import { HardDrive, Server, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Custom Server Solutions",
      description:
        "Enterprise-grade servers built to your exact specifications, optimized for your workload and performance requirements.",
    },
    {
      icon: HardDrive,
      title: "Hardware Configuration",
      description:
        "Expert configuration of all hardware components, ensuring optimal performance and compatibility across your infrastructure.",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description:
        "Secure worldwide shipping and delivery, with real-time tracking and professional installation services available.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive enterprise solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
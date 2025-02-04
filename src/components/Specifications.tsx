import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Specifications = () => {
  const specs = {
    "Processing Power": [
      "Latest Intel Xeon Processors",
      "AMD EPYC Server Solutions",
      "Multi-CPU Configurations",
      "Custom Clock Speeds",
    ],
    "Memory & Storage": [
      "ECC DDR4 RAM Options",
      "NVMe SSD Arrays",
      "Enterprise Hard Drives",
      "Redundant Storage",
    ],
    "Networking": [
      "10GbE/40GbE Support",
      "Redundant NICs",
      "Advanced Routing",
      "Load Balancing",
    ],
    "Security": [
      "TPM 2.0 Module",
      "Hardware Encryption",
      "Secure Boot",
      "Remote Management",
    ],
  };

  return (
    <section id="specs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Technical Specifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Enterprise-grade components and configurations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(specs).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{category}</h3>
              <ul className="space-y-3">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-accent mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
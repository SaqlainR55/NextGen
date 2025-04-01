
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const benefits = [
    {
      id: 1,
      image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.14.20.jpeg",
      title: "BLUEPRINT-READY",
      description: "Our expert team creates detailed, precise blueprints that meet industry standards and ensure smooth project execution."
    },
    {
      id: 2,
      image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.34.31.jpeg",
      title: "LOW VOLTAGE EXPERTS",
      description: "Specialized in low voltage systems with years of experience in designing and implementing cutting-edge solutions."
    },
    {
      id: 3,
      image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.36.54.jpeg",
      title: "AVAILABLE WORLDWIDE",
      description: "Serving clients globally with our comprehensive MEP and blueprint engineering services."
    }
  ];

  const features = [
    "20+ Years Combined Experience",
    "24/7 Technical Support",
    "Certified Engineers",
    "Cost-Effective Solutions",
    "Fast Turnaround Time",
    "Quality Assurance"
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We Stand out in Low Voltage MEP & Blueprints Engineering with our commitment to excellence and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all"
            >
              <div className="relative h-64">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">{card.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why Clients Trust Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600">
            Partner with us for comprehensive MEP solutions that combine technical expertise, 
            innovation, and unwavering commitment to quality. Let us help you bring your 
            projects to life with precision and excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

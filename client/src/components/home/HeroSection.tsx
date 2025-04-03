import { ImageSlider } from "@/components/home/ImageSlider";
import { sliderImages } from "@/data/slider-images";
import consultantImage from "@assets/choose.png";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Expertise Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-3 bg-gradient-to-b from-white to-gray-50 text-center overflow-hidden"
      >
        {/* Removed the following lines to remove transparency effects */}
        {/* <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div> */}

        {/* Removed the following lines to remove transparency effects */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 70%)',
          }}
        /> */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-400 mb-4 px-4 relative z-10 tracking-tight"
        >
          LOW VOLTAGE AND BLUEPRINT
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6"
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 text-center tracking-wide relative z-10"
        >
          ENGINEERING EXPERT
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4 mt-6"
        >
          <div className="px-4 py-2 bg-red-400 rounded-lg shadow-sm">
            <span className="text-white font-bold text-lg">15+ Years Experience</span>
          </div>
          <div className="px-4 py-2 bg-red-400 rounded-lg shadow-sm">
            <span className="text-white font-bold text-lg">100% Success Rate</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 max-w-[1920px] mx-auto p-2 bg-gray-50"> {/* Reduced padding */}
        {/* Project Slider */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500"> {/* Removed hover scale */}
            <ImageSlider images={sliderImages} autoPlayInterval={6000} />
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-1"
        >
          <div className="h-full rounded-xl overflow-hidden shadow-2xl bg-white">
            <div className="relative h-full"> {/* Removed hover effects */}
              <img 
                src={consultantImage} 
                alt="Professional Consultant" 
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

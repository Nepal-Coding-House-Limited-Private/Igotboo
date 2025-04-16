import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import WeMet from '../images/WeMet.png'

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-white px-8 md:px-20 py-10">
      {/* Left Side - Text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-lg"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-red-500">Igotboo</span> 👋
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          The best place to connect with people, explore new ideas, and build real relationships.
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold shadow-lg hover:bg-red-600 transition-all"
        >
          Get Started <ArrowRight size={22} />
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0"
      >
        <img 
          src= {WeMet}
          alt="Social Media" 
          className="w-[90%] md:w-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { Home, Info, Compass, Rocket } from "lucide-react"; // Importing icons
import { motion } from "framer-motion"; // For animations

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="flex justify-between items-center p-4 bg-white text-gray-900 shadow-lg rounded-xl mx-4 mt-4"
    >
      {/* Logo */}
      <motion.h2 
        whileHover={{ scale: 1.1 }} 
        className="text-2xl font-extrabold text-red-500 tracking-wide"
      >
        Igotboo
      </motion.h2>

      {/* Links */}
      <div className="flex gap-6 text-lg">
        <Link to="/" className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
          <Home size={20} /> Home
        </Link>
        <Link to="/about" className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
          <Info size={20} /> About
        </Link>
        <Link to="/motive" className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
          <Compass size={20} /> Motive
        </Link>
      </div>

      {/* Button */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link 
          to="/get-started" 
          className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-md"
        >
          <Rocket size={20} /> Get Started
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

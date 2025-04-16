import { motion } from "framer-motion";
import { Users, MessageCircle, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-white px-8 md:px-20 py-10 flex flex-col items-center justify-center">
      {/* Title Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 text-center"
      >
        About <span className="text-red-500">Igotboo</span> 🚀
      </motion.h1>
      <p className="text-gray-600 text-lg text-center mt-4 max-w-3xl">
      Igotboo is a next-gen social platform where people truly connect, engage, and build real relationships. Say goodbye to fake vibes and hello to <span className="font-bold">authentic interactions</span>! 
      </p>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Community */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <Users size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Community First</h2>
          <p className="text-gray-600 mt-2">
            We focus on **real people, real stories, real connections.** Join a community that cares.
          </p>
        </motion.div>

        {/* Card 2 - Messaging */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <MessageCircle size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Authentic Chats</h2>
          <p className="text-gray-600 mt-2">
            Say **goodbye to dry convos**! Wemet makes sure you meet & chat with like-minded people.
          </p>
        </motion.div>

        {/* Card 3 - Relationships */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center"
        >
          <HeartHandshake size={50} className="text-red-500" />
          <h2 className="text-2xl font-bold mt-4">Build Relationships</h2>
          <p className="text-gray-600 mt-2">
            Meet new people, create friendships, and maybe find **the one!**  
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

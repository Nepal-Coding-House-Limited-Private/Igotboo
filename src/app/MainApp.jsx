import { motion } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import GetStarted from '../pages/GetStarted';
import Motive from '../pages/Motive';
import Matches from '../pages/Matches';

const MainApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/motive" element={<Motive />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-8"
            >
              Welcome to Your Dashboard
            </motion.h1>
            
            {/* Dating Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-red-500">❤️</span> Daily Matches
                </h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">0</p>
                <p className="text-sm text-gray-500 mt-1">New matches today</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-red-500">✨</span> Likes Received
                </h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">0</p>
                <p className="text-sm text-gray-500 mt-1">People interested in you</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-red-500">💬</span> Active Chats
                </h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">0</p>
                <p className="text-sm text-gray-500 mt-1">Ongoing conversations</p>
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Complete Your Dating Profile</h2>
                <p className="text-gray-600 mb-6">Add photos and details to help others get to know you better! 📸</p>
                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Edit Profile
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full font-medium hover:bg-red-50 transition-all duration-300"
                  >
                    Add Photos
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Your Recent Matches</h2>
                <div className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="text-red-400 mb-4"
                  >
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-xl font-medium text-gray-700">No matches yet</p>
                    <p className="text-gray-500 mt-2">Complete your profile to start matching! ✨</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Potential Matches</h2>
                <div className="text-center py-6">
                  <p className="text-gray-600 mb-6">Complete your profile to see potential matches ✨</p>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      borderColor: ["#f43f5e", "#ec4899", "#f43f5e"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mx-auto mb-4 border-2 border-red-500"
                  ></motion.div>
                  <p className="text-sm text-gray-500">Your future matches await! 💝</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Dating Tips</h2>
                <ul className="space-y-4 text-gray-600">
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-red-500">📸</span> Add recent photos to your profile
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-red-500">✍️</span> Write an engaging bio
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-red-500">💝</span> Be honest about your interests
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="text-red-500">🛡️</span> Stay safe while dating
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MainApp;
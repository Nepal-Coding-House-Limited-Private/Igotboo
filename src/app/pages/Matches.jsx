import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const sampleProfiles = [
  {
    id: 1,
    name: 'John',
    age: 28,
    bio: 'Adventurer. Music lover. Dog dad.',
    image: 'https://source.unsplash.com/random/600x400?person',
    interests: ['music', 'hiking', 'photography'],
    verified: true,
  },
  {
    id: 2,
    name: 'Emma',
    age: 25,
    bio: 'Foodie & coffee enthusiast ☕',
    image: 'https://source.unsplash.com/random/600x400?girl',
    interests: ['cooking', 'travel', 'books'],
    verified: false,
  },
  {
    id: 3,
    name: 'Liam',
    age: 31,
    bio: 'Techie who loves the outdoors 🌲',
    image: 'https://source.unsplash.com/random/600x400?man',
    interests: ['coding', 'camping', 'running'],
    verified: true,
  },
];

// Define SwipeCard
const SwipeCard = ({ profile, swipeHandlers, onDragEnd, children }) => (
  <motion.div
    {...swipeHandlers}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    onDragEnd={onDragEnd}
    className="w-80 rounded-2xl shadow-xl overflow-hidden bg-white"
  >
    {children}
  </motion.div>
);

// Define CardContent
const CardContent = ({ profile }) => (
  <div className="p-4">
    <h2 className="text-2xl font-bold text-gray-800">
      {profile.name}, {profile.age}
    </h2>
    <p className="text-gray-600">{profile.bio}</p>
    <div className="mt-2">
      {profile.interests.map((interest, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full mr-2"
        >
          {interest}
        </span>
      ))}
    </div>
    {profile.verified && (
      <span className="inline-block text-blue-500 text-sm mt-2">Verified</span>
    )}
  </div>
);

// Define ActionButtons with icons
const ActionButtons = ({ onDislike, onMessage, onLike }) => (
  <div className="flex justify-around p-4">
    <motion.button
      onClick={onDislike}
      className="p-4 bg-red-200 text-white rounded-full text-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Dislike profile"
    >
      ❌
    </motion.button>
    <motion.button
      onClick={onMessage}
      className="p-4 bg-blue-500 text-white rounded-full text-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Message profile"
    >
      💬
    </motion.button>
    <motion.button
      onClick={onLike}
      className="p-4 bg-green-500 text-white rounded-full text-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Like profile"
    >
      ❤️
    </motion.button>
  </div>
);

const Matches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sampleProfiles.length > 0) {
      setCurrentProfile(sampleProfiles[0]);
      setCurrentIndex(0);
      setIsLoading(false);
    } else {
      setError('No profiles available.');
      setIsLoading(false);
    }
  }, []);

  const triggerSwipe = (dir) => {
    if (!currentProfile) return;
    setDirection(dir);
    handleProfileAction(currentProfile.id, dir === 1 ? 'liked' : 'disliked');
    loadNextProfile();
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => triggerSwipe(-1),
    onSwipedRight: () => triggerSwipe(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 150) {
      triggerSwipe(info.offset.x > 0 ? 1 : -1);
    }
  };

  const swipeVariants = {
    enter: { opacity: 0, x: direction === 1 ? 400 : -400, scale: 0.85 },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: direction === 1 ? 600 : -600,
      scale: 0.7,
      rotate: direction === 1 ? 12 : -12,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const handleProfileAction = (id, action) => {
    console.log(`Profile ${id} ${action}`);
  };

  const loadNextProfile = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < sampleProfiles.length) {
      setCurrentProfile(sampleProfiles[nextIndex]);
      setCurrentIndex(nextIndex);
    } else {
      setCurrentProfile(null);
      setError('No more profiles to display.');
    }
  };

  const handleMessage = () => {
    console.log('Message button clicked');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-96">
          <motion.div
            className="rounded-full h-12 w-12 border-t-4 border-pink-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <p className="mt-4 text-gray-700 font-medium">Finding matches...</p>
        </div>
      ) : error ? (
        <div className="text-center">
          <p className="text-xl text-red-600 font-semibold">{error}</p>
          <motion.button
            onClick={loadNextProfile}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </div>
      ) : currentProfile ? (
        <AnimatePresence>
          <motion.div
            key={currentProfile.id}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <SwipeCard
              profile={currentProfile}
              swipeHandlers={swipeHandlers}
              onDragEnd={handleDragEnd}
            >
              <div
                className="h-80 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${currentProfile.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <motion.div
                  className="absolute top-4 right-4 bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  New Match
                </motion.div>
              </div>
              <CardContent profile={currentProfile} />
              <ActionButtons
                onDislike={() => triggerSwipe(-1)}
                onMessage={handleMessage}
                onLike={() => triggerSwipe(1)}
              />
            </SwipeCard>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="text-center">
          <p className="text-xl text-gray-600 font-semibold">No profiles available.</p>
        </div>
      )}
    </div>
  );
};

export default Matches;
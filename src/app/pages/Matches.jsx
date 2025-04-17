import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
  Chat as ChatIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';

import SwipeCard from '../components/SwipeCard';
import CardContent from '../components/CardContent';
import ActionButtons from '../components/ActionButtons';

const sampleProfiles = [
  {
    id: 1,
    name: 'John',
    age: 28,
    bio: 'Adventurer. Music lover. Dog dad.',
    image: 'https://source.unsplash.com/random/400x300?person',
    interests: ['music', 'hiking', 'photography'],
  },
  {
    id: 2,
    name: 'Emma',
    age: 25,
    bio: 'Foodie & coffee enthusiast ☕',
    image: 'https://source.unsplash.com/random/400x300?girl',
    interests: ['cooking', 'travel', 'books'],
  },
  {
    id: 3,
    name: 'Liam',
    age: 31,
    bio: 'Techie who loves the outdoors 🌲',
    image: 'https://source.unsplash.com/random/400x300?man',
    interests: ['coding', 'camping', 'running'],
  },
];

const Matches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load the first profile
    setCurrentProfile(sampleProfiles[0]);
    setCurrentIndex(0);
    setIsLoading(false);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => triggerSwipe(-1),
    onSwipedRight: () => triggerSwipe(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const triggerSwipe = (dir) => {
    if (!currentProfile || isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      handleProfileAction(currentProfile.id, dir === 1 ? 'like' : 'dislike');
      loadNextProfile();
      setIsAnimating(false);
      setDirection(0); // Reset direction after animation
    }, 300);
  };

  const swipeVariants = {
    enter: { opacity: 0, x: direction === 1 ? 200 : -200 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction === 1 ? -400 : 400, transition: { duration: 0.3 } },
  };

  const handleProfileAction = (id, action) => {
    console.log(`Profile ${id} ${action}d`);
  };

  const loadNextProfile = () => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < sampleProfiles.length) {
        setCurrentProfile(sampleProfiles[nextIndex]);
        setCurrentIndex(nextIndex);
        setIsLoading(false);
      } else {
        setCurrentProfile(null);
        setError('No more profiles found.');
        setIsLoading(false);
      }
    }, 500);
  };

  const handleMessage = () => {
    console.log('Message clicked');
  };

  return (
    <Box sx={{ p: 3 }}>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ textAlign: 'center', color: 'error.main' }}>
          <Typography variant="h6">{error}</Typography>
          <Button onClick={loadNextProfile} sx={{ mt: 2 }}>
            Try Again
          </Button>
        </Box>
      ) : currentProfile && (
        <div {...swipeHandlers} role="region" aria-label="Profile swipe area">
          <Box sx={{ position: 'relative', height: 400 }}>
            <AnimatePresence>
              <motion.div
                key={currentProfile.id}
                variants={swipeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ position: 'absolute', width: '100%' }}
              >
                <SwipeCard>
                  <Box
                    sx={{
                      height: 320,
                      backgroundColor: 'grey.200',
                      backgroundImage: `url(${currentProfile.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent profile={currentProfile} />
                  <ActionButtons>
                    <IconButton
                      onClick={() => triggerSwipe(-1)}
                      sx={{ color: 'error.main' }}
                      aria-label="Dislike profile"
                    >
                      <CloseIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                      onClick={handleMessage}
                      sx={{ color: 'info.main' }}
                      aria-label="Message profile"
                    >
                      <ChatIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                      onClick={() => triggerSwipe(1)}
                      sx={{ color: 'success.main' }}
                      aria-label="Like profile"
                    >
                      <FavoriteIcon fontSize="large" />
                    </IconButton>
                  </ActionButtons>
                </SwipeCard>
              </motion.div>
            </AnimatePresence>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default Matches;
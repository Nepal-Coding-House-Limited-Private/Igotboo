import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, IconButton, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

const SwipeCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 400,
  margin: '0 auto',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: theme.spacing(2),
}));

const interests = [
  'Music', 'Movies', 'Sports', 'Travel', 'Food', 'Art',
  'Reading', 'Gaming', 'Fitness', 'Photography'
];

const Matches = () => {
  const [showInterests, setShowInterests] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleInterestChange = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmitInterests = () => {
    setShowInterests(false);
    // Here we would typically fetch matching profiles based on interests
    setCurrentProfile({
      name: 'Sarah Johnson',
      age: 28,
      bio: 'Love exploring new places and trying different cuisines!',
      interests: ['Travel', 'Food', 'Photography'],
      image: 'https://example.com/profile-image.jpg'
    });
  };

  const handleSwipe = (direction) => {
    // Handle like/dislike logic here
    console.log(`Swiped ${direction}`);
    // Fetch next profile
  };

  const handleMessage = () => {
    // Handle messaging logic
    console.log('Opening message dialog');
  };

  if (showInterests) {
    return (
      <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          What are your interests?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Select at least 3 interests to help us find your perfect match!
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {interests.map((interest) => (
            <FormControlLabel
              key={interest}
              control={
                <Checkbox
                  checked={selectedInterests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />
              }
              label={interest}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          disabled={selectedInterests.length < 3}
          onClick={handleSubmitInterests}
        >
          Find Matches
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      {currentProfile && (
        <SwipeCard>
          <Box
            sx={{
              height: 300,
              backgroundColor: 'grey.200',
              backgroundImage: `url(${currentProfile.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent>
            <Typography variant="h5">
              {currentProfile.name}, {currentProfile.age}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {currentProfile.bio}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {currentProfile.interests.map((interest) => (
                <Typography
                  key={interest}
                  component="span"
                  sx={{
                    mr: 1,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: 'primary.light',
                    color: 'white',
                  }}
                >
                  {interest}
                </Typography>
              ))}
            </Box>
          </CardContent>
          <ActionButtons>
            <IconButton
              onClick={() => handleSwipe('left')}
              sx={{ color: 'error.main' }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              onClick={handleMessage}
              sx={{ color: 'info.main' }}
            >
              <ChatIcon />
            </IconButton>
            <IconButton
              onClick={() => handleSwipe('right')}
              sx={{ color: 'success.main' }}
            >
              <FavoriteIcon />
            </IconButton>
          </ActionButtons>
        </SwipeCard>
      )}
    </Box>
  );
};

export default Matches;
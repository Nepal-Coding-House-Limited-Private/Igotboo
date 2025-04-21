import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { NoDataSvg } from './NoDataSvg';

const NoDataMessage = ({ message, showLoginButton = false }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <NoDataSvg />
      <Typography variant="h5" color="text.primary" sx={{ mt: 4, mb: 2 }}>
        {message || 'No Data Available'}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400 }}>
        {showLoginButton
          ? 'Please sign in to view this content and access all features.'
          : 'There is no data to display at the moment. Please check back later.'}
      </Typography>
      {showLoginButton && (
        <Button
          component={Link}
          to="/app/login"
          variant="contained"
          color="primary"
          size="large"
        >
          Sign In
        </Button>
      )}
    </Box>
  );
};

export default NoDataMessage;

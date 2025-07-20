import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Button, Container } from '@mui/material';
import { Home } from '@mui/icons-material';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: '4rem',
              fontWeight: 700,
              mb: 2,
              color: 'primary.main',
            }}
          >
            404
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: 'text.secondary',
            }}
          >
            Oops! Page not found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            startIcon={<Home />}
            href="/"
            sx={{
              px: 4,
              py: 1.5,
            }}
          >
            Return to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;

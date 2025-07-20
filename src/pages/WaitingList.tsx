import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  useTheme,
  alpha,
  Chip,
} from '@mui/material';
import {
  Email,
  CheckCircle,
  ArrowBack,
  Notifications,
  Star,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { subscribeToWaitingList } from '@/services/mailchimp';

const WaitingList = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      // Subscribe to Mailchimp waiting list
      const result = await subscribeToWaitingList(email);
      
      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 12,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
          }}
        >
          <Container maxWidth="sm">
            <Card
              sx={{
                p: 6,
                textAlign: 'center',
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                border: 1,
                borderColor: alpha(theme.palette.common.white, 0.1),
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <CheckCircle
                  sx={{
                    fontSize: '4rem',
                    color: 'primary.main',
                    mb: 3,
                  }}
                />
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  You're on the list!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    fontSize: '1.125rem',
                  }}
                >
                  Thank you for your interest in Homie Ai hardware. We'll notify you as soon as it's available for purchase.
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Chip
                    label="Early Bird Access"
                    icon={<Star />}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                    }}
                  />
                </Box>
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  startIcon={<ArrowBack />}
                  sx={{
                    borderColor: alpha(theme.palette.common.white, 0.3),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  Back to Home
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Box
        sx={{
          flex: 1,
          py: 12,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
        }}
      >
        <Container maxWidth="md">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
              <Notifications sx={{ color: 'primary.main' }} />
              <Typography sx={{ color: 'primary.main', fontWeight: 500 }}>
                Join the Waiting List
              </Typography>
            </Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', lg: '3.5rem' },
              }}
            >
              Be the first to get
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: theme.custom.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Homie Ai Hardware
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '32rem',
                mx: 'auto',
                fontSize: '1.25rem',
                lineHeight: 1.6,
              }}
            >
              Get notified when our NVIDIA Jetson-powered AI hardware solution becomes available.
              Early subscribers get priority access and special pricing.
            </Typography>
          </Box>

          {/* Main Form Card */}
          <Card
            sx={{
              p: 6,
              maxWidth: '32rem',
              mx: 'auto',
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
              border: 1,
              borderColor: alpha(theme.palette.common.white, 0.1),
              boxShadow: theme.custom.shadows.premium,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: 'center',
                }}
              >
                Join the Waiting List
              </Typography>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: alpha(theme.palette.common.white, 0.2),
                      },
                      '&:hover fieldset': {
                        borderColor: alpha(theme.palette.common.white, 0.3),
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <Email sx={{ color: 'text.secondary', mr: 1 }} />
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="gradient"
                  fullWidth
                  size="large"
                  disabled={isLoading}
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  {isLoading ? 'Joining...' : 'Join Waiting List'}
                </Button>
              </form>

              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  mt: 3,
                  fontSize: '0.875rem',
                }}
              >
                We respect your privacy. No spam, just updates about Homie Ai hardware availability.
              </Typography>
            </CardContent>
          </Card>

          {/* Back to pricing link */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to="/#pricing"
              variant="text"
              startIcon={<ArrowBack />}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                  backgroundColor: alpha(theme.palette.common.white, 0.05),
                },
              }}
            >
              Back to Pricing
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default WaitingList;

import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Chip,
  Stack,
} from '@mui/material';
import {
  AccessTime,
  ArrowBack,
  Notifications,
  Construction,
  Launch,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ComingSoon = () => {
  const theme = useTheme();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      <Box
        sx={{
          flex: 1,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          display: 'flex',
          alignItems: 'center',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Back Button */}
            <Button
              component={Link}
              to="/"
              startIcon={<ArrowBack />}
              variant="text"
              sx={{
                alignSelf: 'flex-start',
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              Back to Home
            </Button>

            {/* Main Content */}
            <Card
              sx={{
                p: { xs: 3, md: 6 },
                backgroundColor: alpha(theme.palette.background.paper, 0.9),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                boxShadow: theme.shadows[10],
                borderRadius: 3,
                width: '100%',
                maxWidth: 600,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Construction
                      sx={{
                        fontSize: '3rem',
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Coming Soon
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  We're working hard to bring you something amazing. This feature is currently under development.
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 4, justifyContent: 'center' }}
                >
                  <Chip
                    icon={<AccessTime />}
                    label="In Development"
                    variant="outlined"
                    color="primary"
                    sx={{
                      px: 2,
                      py: 1,
                      '& .MuiChip-label': {
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      },
                    }}
                  />
                  <Chip
                    icon={<Launch />}
                    label="Launch Soon"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      px: 2,
                      py: 1,
                      '& .MuiChip-label': {
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      },
                    }}
                  />
                </Stack>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Stay tuned for updates! Join our waiting list to be the first to know when this feature becomes available.
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ justifyContent: 'center' }}
                >
                  <Button
                    component={Link}
                    to="/waiting-list"
                    variant="contained"
                    size="large"
                    startIcon={<Notifications />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[8],
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Join Waiting List
                  </Button>
                  <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Explore Features
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ComingSoon;

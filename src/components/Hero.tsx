import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Card,
  CardContent,
  useTheme,
  alpha,
} from '@mui/material';
import {
  ArrowForward,
  Download,
  GitHub,
  FiberManualRecord,
} from '@mui/icons-material';
import heroImage from '@/assets/jetson-agx-orin-developer-kit.jpg';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        pt: 12,
        pb: 8,
        background: theme.custom.gradients.hero,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: 6,
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, maxWidth: { lg: '50%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  Host
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
                    LLMs at Home
                  </Box>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      display: 'block',
                      color: 'text.secondary',
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Open Source & Private
                  </Typography>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: '28rem',
                    fontSize: '1.25rem',
                    lineHeight: 1.6,
                  }}
                >
                  Take control of your AI with Homie Ai. Secure, unlimited access to large language models
                  running entirely on your own hardware. Available as open-source software or complete
                  plug-and-play hardware solution.
                </Typography>
              </Box>

              {/* Key Benefits */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {['100% Private', 'Unlimited Usage', 'Developer API'].map((benefit) => (
                  <Chip
                    key={benefit}
                    label={benefit}
                    icon={<FiberManualRecord sx={{ fontSize: '8px !important' }} />}
                    sx={{
                      backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                      color: 'text.primary',
                      '& .MuiChip-icon': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                ))}
              </Box>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    borderColor: alpha(theme.palette.common.white, 0.3),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: alpha(theme.palette.common.white, 0.5),
                      backgroundColor: alpha(theme.palette.common.white, 0.05),
                    },
                  }}
                >
                  Download
                </Button>

                <Button
                  variant="text"
                  size="large"
                  startIcon={<GitHub />}
                  href="https://github.com/Homie-Ai-project"
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: alpha(theme.palette.common.white, 0.05),
                    },
                  }}
                >
                  View on GitHub
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Right Content - Hero Image */}
          <Box sx={{ flex: 1, maxWidth: { lg: '50%' } }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'relative',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Homie Ai Setup"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: theme.custom.shadows.premium,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 15, 35, 0.2), transparent)',
                    borderRadius: 2,
                  }}
                />
              </Box>

              {/* Floating Elements */}
              <Chip
                label="Private and Unlimited"
                sx={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 500,
                  boxShadow: theme.custom.shadows.elegant,
                  animation: 'scaleIn 0.5s ease-out',
                  '@keyframes scaleIn': {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' },
                  },
                }}
              />

              <Card
                sx={{
                  position: 'absolute',
                  bottom: -16,
                  left: -16,
                  minWidth: 160,
                  animation: 'fadeUp 0.8s ease-out',
                  '@keyframes fadeUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Status
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 1 },
                          '50%': { opacity: 0.5 },
                        },
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Online & Ready
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
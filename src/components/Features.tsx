import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Shield,
  Bolt,
  Code,
  Psychology,
  Storage,
  GitHub,
} from '@mui/icons-material';

const Features = () => {
  const theme = useTheme();

  const features = [
    {
      icon: GitHub,
      title: "Open Source",
      description: "Fully open source codebase. Fork, modify, and contribute. Complete transparency and community-driven development."
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "Your data never leaves your network. Complete privacy and security with end-to-end encryption."
    },
    {
      icon: Bolt,
      title: "Unlimited Usage",
      description: "No API limits, no usage caps. Use as much as you need without worrying about costs."
    },
    {
      icon: Code,
      title: "Developer API",
      description: "Full REST API access with comprehensive documentation. Integrate AI into any application."
    },
    {
      icon: Psychology,
      title: "Advanced Agents",
      description: "Deploy sophisticated AI agents that can reason, plan, and execute complex tasks."
    },
    {
      icon: Storage,
      title: "Multiple LLMs",
      description: "Support for Llama, Mistral, CodeLlama, and more. Switch between models instantly."
    }
  ];

  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: 12,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', lg: '3rem' },
            }}
          >
            Everything you need to
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
              host AI at home
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '48rem',
              mx: 'auto',
              fontSize: '1.25rem',
              lineHeight: 1.6,
            }}
          >
            Homie Ai provides all the tools and infrastructure you need to run large language models
            securely on your own hardware. Choose from our open-source software or get our complete
            plug-and-play hardware solution with NVIDIA Jetson and pre-installed software.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              sx={{
                p: 4,
                height: '100%',
                transition: 'all 0.3s ease',
                border: 1,
                borderColor: alpha(theme.palette.common.white, 0.1),
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: theme.custom.shadows.premium,
                },
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(30px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      background: theme.custom.gradients.primary,
                      borderRadius: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: theme.custom.shadows.elegant,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <feature.icon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Card
            sx={{
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
              p: { xs: 4, lg: 6 },
              border: 1,
              borderColor: alpha(theme.palette.common.white, 0.1),
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.5rem', lg: '2rem' },
                }}
              >
                Ready to take control of your AI?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '32rem',
                  mx: 'auto',
                  fontSize: '1.125rem',
                }}
              >
                Join thousands of developers and organizations who trust Homie Ai for their
                private language model hosting needs.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  href='https://github.com/Homie-Ai-project/homie_os/tree/main/docs'
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderColor: alpha(theme.palette.common.white, 0.3),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  View Documentation
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
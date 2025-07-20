import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Check,
  GitHub,
  Favorite,
  Star,
  Forum,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const theme = useTheme();

  const plans = [
    {
      name: "Open Source",
      price: "Free",
      period: "Forever",
      description: "Perfect for developers and enthusiasts",
      features: [
        "Full source code access",
        "Community support",
        "Basic LLM models",
        "Local deployment",
        "API access",
        "Regular updates"
      ],
      cta: "Download",
      variant: "outlined" as const,
      popular: false,
      href: "https://github.com/Homie-Ai-project"
    },
    {
      name: "Homie Ai + Hardware",
      price: "$399",
      period: "One-time",
      description: "Complete plug-and-play AI hardware solution",
      features: [
        "NVIDIA Jetson Orin™ Nano Super Developer Kit",
        "SSD with software pre-installed",
        "Plug and play setup",
        "Everything in Open Source",
        "Advanced web interface",
        "One-click updates",
      ],
      cta: "Buy Now",
      variant: "hero" as const,
      popular: true,
      href: "/waiting-list"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "For organizations with specific needs",
      features: [
        "NVIDIA Jetson AGX Orin 64GB Developer Kit",
        "Plug and play setup",
        "Premium LLM models",
        "Advanced web interface",
        "Automatic updates",
        "Priority support",
        "Commercial license",
      ],
      cta: "Contact Sales",
      variant: "outlined" as const,
      popular: false,
      href: "mailto:sales@homieos.com"
    }
  ];

  return (
    <Box
      component="section"
      id="open-source"
      sx={{
        py: 12,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
        overflow: 'visible', // Ensure no clipping
      }}
    >
      <Container maxWidth="xl" sx={{ overflow: 'visible' }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <GitHub sx={{ color: 'primary.main' }} />
            <Typography sx={{ color: 'primary.main', fontWeight: 500 }}>
              Open Source First
            </Typography>
          </Box>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', lg: '3rem' },
            }}
          >
            Choose Your
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
              Homie Ai Experience
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
            Start with our free, open-source version or upgrade to Pro for enhanced features and support.
            Your data stays private regardless of which option you choose.
          </Typography>
        </Box>

        {/* Open Source Banner */}
        <Card
          sx={{
            background: theme.custom.gradients.primary,
            p: 4,
            mb: 6,
            textAlign: 'center',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
              <Favorite sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>
                100% Open Source
              </Typography>
            </Box>
            <Typography
              sx={{
                color: alpha('#ffffff', 0.9),
                maxWidth: '32rem',
                mx: 'auto',
                mb: 3,
              }}
            >
              Homie Ai is completely open source. Fork, modify, and contribute to the project.
              Your privacy and freedom are our top priorities.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              <Button
                component="a"
                href="https://github.com/Homie-Ai-project"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHub sx={{ fontSize: '2rem' }} />}
                sx={{
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '0.75rem 1.5rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: alpha('#ffffff', 0.1),
                  },
                }}
              >
                Follow on GitHub
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Pricing Cards */}
        <Box
          id="pricing"
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            mt: 4, // Increase top margin to ensure "Most Popular" chip is fully visible
            pt: 2, // Add padding top as additional safety margin
          }}
        >
          {plans.map((plan, index) => (
            <Box key={plan.name} sx={{ position: 'relative', pt: 3, height: '100%' }}>
              {plan.popular && (
                <Chip
                  label="Most Popular"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    fontWeight: 500,
                    zIndex: 1,
                  }}
                />
              )}
              <Card
                sx={{
                  position: 'relative',
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: plan.popular ? 2 : 1,
                borderColor: plan.popular ? 'primary.main' : alpha(theme.palette.common.white, 0.1),
                boxShadow: plan.popular ? theme.custom.shadows.premium : theme.custom.shadows.elegant,
                '&:hover': {
                  transform: 'scale(1.02)',
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
              <CardContent sx={{ 
                p: 0, 
                '&:last-child': { pb: 0 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {plan.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {plan.price}
                    </Typography>
                    {plan.period !== "Forever" && plan.period !== "Contact us" && (
                      <Typography
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          ml: 1,
                        }}
                      >
                        /{plan.period}
                      </Typography>
                    )}
                    {plan.period === "Forever" && (
                      <Typography
                        component="span"
                        sx={{
                          color: 'primary.main',
                          ml: 1,
                          fontWeight: 500,
                        }}
                      >
                        {plan.period}
                      </Typography>
                    )}
                    {plan.period === "Contact us" && (
                      <Typography
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          ml: 1,
                        }}
                      >
                        {plan.period}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {plan.description}
                  </Typography>
                </Box>

                <List sx={{ mb: 4, p: 0, flexGrow: 1 }}>
                  {plan.features.map((feature) => (
                    <ListItem key={feature} sx={{ p: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Check sx={{ fontSize: 20, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          fontSize: '0.875rem',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant={plan.variant}
                  fullWidth
                  size="large"
                  component={plan.href.startsWith('/') ? Link : "a"}
                  to={plan.href.startsWith('/') ? plan.href : undefined}
                  href={!plan.href.startsWith('/') ? plan.href : undefined}
                  target={plan.href.startsWith('http') ? '_blank' : undefined}
                  rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    py: 1.5,
                  }}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
            </Box>
          ))}
        </Box>

        {/* Bottom Message */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Card
            sx={{
              backgroundColor: alpha(theme.palette.secondary.main, 0.1),
              p: 4,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Questions?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  maxWidth: '32rem',
                  mx: 'auto',
                }}
              >
                We're here to help you choose the right option for your needs.
                Join our community or reach out directly.
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
                  startIcon={<Forum />}
                  href="https://discord.gg/k64erSMgcX"
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: alpha(theme.palette.common.white, 0.3),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  Join Community
                </Button>
                <Button
                  variant="text"
                  href='mailto:support@homieos.com'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: alpha(theme.palette.common.white, 0.05),
                    },
                  }}
                >
                  Contact Support
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
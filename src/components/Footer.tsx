import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import {
  GitHub,
  Email,
  Forum,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: alpha(theme.palette.secondary.main, 0.05),
        borderTop: 1,
        borderColor: alpha(theme.palette.common.white, 0.1),
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ py: 8 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(4, 1fr)',
              },
              gap: 4,
            }}
          >
            {/* Brand */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Homie Ai Logo"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1,
                  }}
                />
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  Homie Ai
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '20rem',
                }}
              >
                Secure, unlimited LLM hosting at home. Take control of your AI infrastructure.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[
                  { icon: GitHub, href: 'https://github.com/Homie-Ai-project' },
                  { icon: Forum, href: 'https://discord.gg/k64erSMgcX' },
                  { icon: Email, href: 'mailto:support@homieos.com' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.href}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'text.primary',
                      },
                    }}
                  >
                    <social.icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* Product */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Product
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'Features', href: '/#features' },
                  { label: 'Pricing', href: '/#pricing' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'text.primary',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Resources */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'Documentation', href: 'https://github.com/Homie-Ai-project/homie_os/tree/main/docs' },
                  { label: 'Tutorials', href: '/coming-soon' },
                  { label: 'Community', href: 'https://discord.gg/k64erSMgcX' },
                  { label: 'Support', href: 'mailto:support@homieos.com' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'text.primary',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Company */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'About', href: '/coming-soon' },
                  { label: 'Blog', href: '/coming-soon' },
                  { label: 'Careers', href: '/coming-soon' },
                  { label: 'Contact', href: 'mailto:hello@homieos.com' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'text.primary',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              borderTop: 1,
              borderColor: alpha(theme.palette.common.white, 0.1),
              mt: 6,
              pt: 4,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © 2024 Homie Ai. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  href="/coming-soon"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'text.primary',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
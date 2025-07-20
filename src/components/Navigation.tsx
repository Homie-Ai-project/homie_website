import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Typography,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Open Source', href: '/#open-source' },
    { label: 'Docs', href: 'https://github.com/Homie-Ai-project/homie_os/tree/main/docs' },
  ];

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80; // Height of the fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Effect to handle scrolling when navigating to home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small delay to ensure page has loaded
      const timer = setTimeout(() => {
        const sectionId = location.hash.substring(1);
        scrollToSection(sectionId);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle internal section links (like /#features)
    if (href.startsWith('/#') && href !== '/#') {
      e.preventDefault();
      const targetId = href.substring(2); // Remove '/#' to get the section id
      
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate(`/#${targetId}`);
      } else {
        // If we're already on the home page, just scroll
        scrollToSection(targetId);
      }
    }
    
    // Close mobile menu after clicking
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              component="a" 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ flexDirection: 'column', gap: 1, mt: 2 }}>
          <Button 
            variant="outlined" 
            fullWidth
            href="https://github.com/Homie-Ai-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
          <Button 
            variant="gradient" 
            fullWidth
            component={Link}
            to="/waiting-list"
          >
            Buy Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
          {/* Logo */}
          <Box 
            component={Link}
            to="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
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

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button 
                variant="outlined" 
                color="inherit"
                href="https://github.com/Homie-Ai-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </Button>
              <Button 
                variant="gradient"
                component={Link}
                to="/waiting-list"
              >
                Buy Now
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navigation;
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
    hero: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      gradients: {
        primary: string;
        hero: string;
      };
      shadows: {
        elegant: string;
        premium: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      gradients?: {
        primary?: string;
        hero?: string;
      };
      shadows?: {
        elegant?: string;
        premium?: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f1f5f9',
      light: '#f8fafc',
      dark: '#e2e8f0',
      contrastText: '#1e293b',
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: '3.75rem',
      fontWeight: 700,
      lineHeight: 1.1,
      '@media (max-width:1024px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  custom: {
    gradients: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      hero: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    },
    shadows: {
      elegant: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      premium: '0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#ffffff',
            '&:hover': {
              background: 'linear-gradient(135deg, #5855eb 0%, #7c3aed 100%)',
              transform: 'translateY(-1px) scale(1.02)',
            },
          },
        },
        {
          props: { variant: 'hero' },
          style: {
            background: '#f8fafc',
            color: '#0f0f23',
            fontWeight: 600,
            padding: '12px 24px',
            fontSize: '1rem',
            '&:hover': {
              background: '#e2e8f0',
              transform: 'translateY(-1px) scale(1.02)',
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 15, 35, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 46, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;

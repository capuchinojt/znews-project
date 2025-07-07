// theme.ts
import { createTheme } from '@mui/material/styles';
import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({
  weight: ['400', '700'],
  subsets: ['vietnamese'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: notoSerif.style.fontFamily,
    h5: {
      fontSize: '1.25rem', // Default h5
      '@media (min-width:600px)': {
        fontSize: '1.5rem', // Larger on tablet
      },
      '@media (min-width:900px)': {
        fontSize: '1.75rem', // Even larger on desktop for main article title
      },
    },
    h6: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.15rem',
      },
    },
    body1: {
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.8rem',
      '@media (min-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    caption: {
      fontSize: '0.75rem',
      '@media (min-width:600px)': {
        fontSize: '0.8rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#dd0000', // Znews red
    },
    secondary: {
      main: '#666666', // Grey for text
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          padding: '6px 12px',
        },
      },
    },
  },
});

export default theme;
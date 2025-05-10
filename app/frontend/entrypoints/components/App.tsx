import React from "react";
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#080808',
      paper: '#151515',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d0d0d0',
    },
  },
  typography: {
    h4: {
      color: '#ff1a75',
      fontWeight: 700,
    },
    body1: {
      color: '#f0f0f0',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box 
          textAlign="center" 
          mt={8}
          sx={{
            padding: 4,
            borderRadius: 2,
            boxShadow: '0 0 20px rgba(255, 64, 129, 0.3)',
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #ffff00, #00ff85, #bf00ff)',
              backgroundSize: '200% 200%',
              animation: 'gradient 5s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 5px rgba(255,255,255,0.5)',
              fontSize: '2.5rem',
              '@keyframes gradient': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
              },
            }}
          >
            Project Under Development
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              color: '#f8f8f8',
              marginTop: 2,
            }}
          >
            The page for magical taste creation will be available soon.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
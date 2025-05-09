import React from "react";
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    h4: {
      color: '#ff4081',
    },
    body1: {
      color: '#b0b0b0',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #ffff00, #00ff00, #7b1fa2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Project Under Development
          </Typography>
          <Typography variant="body1">
            The page for magical taste creation will be available soon.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
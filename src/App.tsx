import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import AppRouter from './navigation/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

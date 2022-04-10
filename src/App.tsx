import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import AppRouter from './navigation/Router';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;

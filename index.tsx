import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Context, State } from './state/App';

//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';
import './assets/style.css';

import App from './App';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fe8800',
      light: '#ffffff',
      contrastText: '#ffffff',
    },
  },
});

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Context.Provider value={State}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Context.Provider>
  </StrictMode>
);

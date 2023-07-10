import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import { App } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

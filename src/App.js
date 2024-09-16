import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {theme} from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/layout.jsx';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;

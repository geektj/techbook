import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {theme} from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;

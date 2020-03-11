import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from "theme/theme";
import Header from 'components/Header'
import Container from 'components/Container';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #c6c6c6;
    color: #212529;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container />
    </ThemeProvider>
  );
};

export default App;
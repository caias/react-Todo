import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import theme from "theme/theme";
import thunk from 'redux-thunk';

import App from 'components/App';

import './scss/global.scss';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #c6c6c6;
    color: #212529;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
`;

const rootElement = document.getElementById('app');

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);
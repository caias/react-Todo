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
    background-color: #ebecf0;
    color: #babecc;
    font-family: 'Montserrat',sans-serif";
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
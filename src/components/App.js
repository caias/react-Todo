import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import theme from "theme/theme";
import Header from 'components/Header'
import TodoContainer from 'components/container/container';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #c6c6c6;
    color: #212529;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
`;

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <TodoContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
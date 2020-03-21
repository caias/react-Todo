import React from 'react';
// Presentational Component
import Header from 'components/Header'
import ActionContainer from 'containers/ActionContainer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ActionContainer />
    </React.Fragment>
  );
};

export default App;
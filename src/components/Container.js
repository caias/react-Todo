import React from 'react';
import Complete from 'components/Complete';
import Incomplete from 'components/Incomplete';
import TodoInput from 'components/TodoInput';

const Container = () => {
  return(
    <div className="container">
      <div className="row">
        <TodoInput />
        <Incomplete />
        <Complete />
      </div>
    </div>
  );
}

export default Container;
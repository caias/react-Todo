import React from 'react';

const TodoItem = (props) => {
  const { type } = props;

  return(
    <a href="" className={`list-group-item list-group-item-action list-group-item-${type === 'complete' ? 'info' : 'primary'}`}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small>2019-04-10 14:00</small>
      </div>
    </a>
  );
}

export default TodoItem;
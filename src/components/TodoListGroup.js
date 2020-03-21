import React, { useState, useRef } from 'react';
// Presentational Component
import ListGorup from 'designComponents/ListGorup';
import ListItem from 'designComponents/ListItem';

const TodoListGroup = (props) => {
  const {
    data,
  } = props;

  const [activeState, setActiveState] = useState(data);

  const onSelect = () => {
    setActiveState(activeState.map(value => value.active = true));
    console.log(activeState);
  }
  // console.log(activeState.map(value => value.active = true))

  return(
    <ListGorup>
      <ListItem text="전체선택" children={false} />
      {
        activeState.map((list, index) =>
          <ListItem
            key={index}
            index={index}
            title={list.title}
            updateDate={list.updateDate}
            active={list.active}
            children={true}
            onClick={onSelect}
          />)
      }
    </ListGorup>
  );
}

export default TodoListGroup;
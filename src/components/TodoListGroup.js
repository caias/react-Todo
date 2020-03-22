import React, { useState, useCallback, useEffect } from 'react';
// Presentational Component
import ListGorup from 'designComponents/ListGorup';
import ListItem from 'designComponents/ListItem';

const TodoListGroup = (props) => {
  const {
    data,
  } = props;

  const [allToggle, setAllToggle] = useState(false);
  const [activeState, setActiveState] = useState(data);

  useEffect(() => {
    getCheckstatus();
  }, [activeState]);

  const getCheckstatus = useCallback(() => {
    const activedLength = activeState.filter(data => data.active === true).length;
    activeState.length === activedLength ? setAllToggle(true) : setAllToggle(false);
  });

  const onToggleAll = useCallback(
    (e) => {
      e.preventDefault();
      setAllToggle(!allToggle);
      setActiveState(
        activeState.map(todo => {
          return { ...todo, active: !allToggle }
        })
      );
    },
    [activeState]
  );

  const onToggleItem = useCallback((e, index) => {
    e.preventDefault();
    setActiveState(
      activeState.map((todo, todoIndex) => {
        return todoIndex === index ? { ...todo, active: !todo.active } : todo;
      })
    );
  }, [activeState]);

  return(
    <ListGorup>
      <ListItem 
        text="전체선택"
        active={allToggle}
        onClick={onToggleAll}
        children={false} 
      />
      {
        activeState.map((list, index) =>
          <ListItem
            key={index}
            index={index}
            title={list.title}
            updateDate={list.updateDate}
            active={list.active}
            children={true}
            onClick={onToggleItem}
          />)
      }
    </ListGorup>
  );
}

export default TodoListGroup;
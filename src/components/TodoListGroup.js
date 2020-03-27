import React, { useState, useCallback, useEffect } from 'react';
// Presentational Component
import ListGorup from 'designComponents/ListGorup';
import ListItem from 'designComponents/ListItem';
import ButtonWrap from 'components/ButtonWrap';

const TodoListGroup = (props) => {
  const {
    data,
    type,
    incompleteToggleTodo,
    completeToggleTodo,
    completedTodo,
    incompleteToggleAll,
    completeToggleAll,
    incompletedTodo,
  } = props;

  const iscompleteMode = type === 'complete';

  const [allToggle, setAllToggle] = useState(false);

  useEffect(() => {
    getCheckstatus();
  }, [data]);

  const getCheckstatus = useCallback(() => {
    const activedLength = data.filter(data => data.active === true).length;
    data.length === activedLength ? setAllToggle(true) : setAllToggle(false);
  });

  const onToggleAll = useCallback((e) => {
      e.preventDefault();
      setAllToggle(!allToggle);
      iscompleteMode ? completeToggleAll(!allToggle) : incompleteToggleAll(!allToggle);
    }, [data]);

  const onToggleItem = useCallback((e, index) => {
    e.preventDefault();
    iscompleteMode ? completeToggleTodo(index) : incompleteToggleTodo(index)
  }, [data]);

  function onTodoHandler() {
    const moveData = data.filter(value => value.active);
    const keepData = data.filter(value => !value.active);

    iscompleteMode && incompletedTodo(moveData, keepData);
    !iscompleteMode && completedTodo(moveData, keepData);
  }

  return(
    <React.Fragment>
      <ListGorup>
        <ListItem 
          text="전체선택"
          active={allToggle}
          onClick={onToggleAll}
          children={false} 
        />
        {
          data.map((list, index) =>
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
      <ButtonWrap
        align="right"
        text="COMPLETE"
        onClick={onTodoHandler}
      />
    </React.Fragment>
  );
}

export default TodoListGroup;
import React, { useState } from 'react';
import styled from 'styled-components';

// Presentational Component
import TodoItem from 'components/TodoItem';
import SubmitButton from 'components/SubmitButton';
import SelectBox from 'components/SelectBox';
import AllSelect from 'components/AllSelect'

// util
import { getDate } from 'utils/date';
import { subjectSort, newestSort } from '../utils/sort';

const ListBox = (props) => {
  const { 
    data,
    mode,
    sortTodo,
    completedTodo,
    incompletedTodo
  } = props;
  const [activeStatus, setActiveStatus] = useState(false);
  const isComplete = mode === 'completed';

  const allCheckHandler = (status) => {
    setActiveStatus(status);
  }

  const onChangeHandler = (value) => {
    const shallowData = data.slice();
    const sortType = value === 'subject' ? subjectSort(shallowData) : newestSort(shallowData);
    sortTodo(sortType);
  }

  const onSubmit = () => {
    const moveData = [];
    const keepData = [];
    const item = document.querySelectorAll(`[data-item=${mode}]`);
    Array.from(item).forEach((value) => {
      const hasActive = value.classList.contains('active');
      const innerText = value.text;
      const sliceIndex = innerText.indexOf(2);
      const obj = {
        title: innerText.slice(0, sliceIndex),
        updateDate: getDate(),
      }
      hasActive ? moveData.push(obj) : keepData.push(obj);
    });
    isComplete ? incompletedTodo(moveData, keepData) : completedTodo(moveData, keepData)
  }

  return(
    <React.Fragment>
      {!isComplete && <SelectBox onChange={onChangeHandler} />}
      <ItemContainer mode={mode}>
        <AllSelect
          mode={mode}
          activeStatus={activeStatus}
          allCheckHandler={allCheckHandler}
        />
        {data.map((list, index) => 
          <TodoItem
            key={mode + index}
            mode={mode}
            title={list.title}
            updateDate={list.updateDate}
            allCheckHandler={allCheckHandler}
          />)}
      </ItemContainer>
      <SubmitButton onSubmit={onSubmit} mode={mode} text={isComplete ? '복구하기' : '완료하기'} />
    </React.Fragment>
  );
}

const ItemContainer = styled.div`
  background-color: ${props => props.theme[props.mode].containerBg};
  color: ${props => props.theme[props.mode].fontColor};
  overflow: hidden;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.125);
`;

export default ListBox;
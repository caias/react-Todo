import React, { useState } from 'react';
import styled from 'styled-components';

// Presentational Component
import TodoItem from 'components/TodoItem';
import SubmitButton from 'components/SubmitButton';
import SelectBox from 'components/SelectBox';
import AllSelect from 'components/AllSelect'

const ItemContainer = styled.div`
  background-color: ${props => props.theme[props.mode].containerBg};
  color: ${props => props.theme[props.mode].fontColor};
  overflow: hidden;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.125);
`;

const ListBox = (props) => {
  const { data, mode } = props;
  const isComplete = mode === 'completed';

  const [activeStatus, setActiveStatus] = useState([false, false]);

  function allCheckHandler(status, allStatus) {
    setActiveStatus([status, allStatus]);
  }

  const setActive = activeStatus[0];
  const setAllActive = activeStatus[1];

  return(
    <React.Fragment>
      {!isComplete && <SelectBox />}
      <ItemContainer mode={mode}>
        <AllSelect
          mode={mode}
          setActive={setActive}
          allCheckHandler={allCheckHandler}
        />
        {data.map((list, index) => 
          <TodoItem
            key={index}
            mode={mode}
            title={list.title}
            updateDate={list.updateDate}
            setAllActive={setAllActive}
            setActive={setActive}
            allCheckHandler={allCheckHandler}
          />)}
      </ItemContainer>
      <SubmitButton mode={mode} text={isComplete ? '복구하기' : '완료하기'} />
    </React.Fragment>
  );
}

export default ListBox;
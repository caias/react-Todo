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

  const [allSelect, setAllSelect] = useState([]);
  const [active, setActive] = useState([false, false, false]);
  
  const onHandle = (index) => {
    active[index] = !active[index];
    setActive(active);
    // console.log(active);
  }
  
  const checkAllActive = (e) => {
    e.preventDefault();
    // setAllSelect(!hasNonActive);
  }

  return(
    <React.Fragment>
      {!isComplete && <SelectBox />}
      <ItemContainer mode={mode}>
        <AllSelect mode={mode}/>
        {data.map((list, index) => 
          <TodoItem 
            key={index}
            mode={mode}
            title={list.title}
            updateDate={list.updateDate}
            // onHandle={onHandle}
            index={index}
            isActive={active[index]}
            active={active}
            setActive={setActive}
          />)}
      </ItemContainer>
      <SubmitButton mode={mode} text={isComplete ? '복구하기' : '완료하기'} />
    </React.Fragment>
  );
}

export default ListBox;
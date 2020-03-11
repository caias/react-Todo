import React from 'react';
import styled from 'styled-components';
import TodoItem from 'components/TodoItem';
import SubTitle from 'components/SubTitle';
import Button from 'components/Button';
import SelectBox from 'components/SelectBox';
import AllSelect from 'components/AllSelect'

const ListBox = (props) => {
  const { type } = props;
  const isComplete = type === 'complete'

  const ItemContainer = styled.div`
    background-color: ${props => props.theme[type].containerBg};
    color: ${props => props.theme[type].fontColor};
    overflow: hidden;
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.125);
  `;

  return(
    <React.Fragment>
      <SubTitle title={`${isComplete ? '완료된' : '미완료'} 리스트`}  />
      {type === 'incomplete' && <SelectBox />}
      <ItemContainer>
        <AllSelect {...props}/>
        <TodoItem {...props} />
      </ItemContainer>
      <Button {...props} text={isComplete ? '복구하기' : '완료하기'} />
    </React.Fragment>
  );
}

export default ListBox;
import React from 'react';
import styled from 'styled-components';
import ListBox from 'components/ListBox';
import TodoInput from 'components/TodoInput';

const DIV = styled.div`
  overflow: hidden;
  padding: 0 45px 45px;
  margin-left: auto;
  margin-right: auto;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: .25rem;
  overflow: hidden;
  padding: 1.25rem;
  margin-top: 2rem;
`;

const Container = () => {
  return(
    <DIV>
      <CardContainer>
        <TodoInput />
      </CardContainer>
      <CardContainer>
        <ListBox type="incomplete" />
      </CardContainer>
      <CardContainer>
        <ListBox type="complete" />
      </CardContainer>
    </DIV>
  );
}

export default Container;
import React from 'react';

import SubTitle from 'designComponents/SubTitle';
import Container from 'designComponents/Container';
import Section from 'designComponents/Section';
import AlignDiv from 'designComponents/AlignDiv';
import SelectBox from 'designComponents/SelectBox';

import AddTodoForm from 'components/AddTodoForm';
// Container Components
import IncompleteContainer from 'containers/IncompleteContainer';
import CompleteContainer from 'containers/CompleteContainer';

/**
 * selectbox optino
 */
const sortOpt = [
  {
    name: '제목순',
    value: 'subject',
  },
  {
    name: '최신순',
    value: 'newest',
  },
]

const TodoContent = (props) => {
  const {
    addTodo,
    sortTodo,
  } = props;

  return(
    <Container>
      <Section>
        <SubTitle title="Todo 추가하기" />
        <AddTodoForm addTodo={addTodo} />
      </Section>
      <Section>
        <SubTitle title="미완료 리스트" />
        <AlignDiv align='right' marginTop='0'>
          <SelectBox options={sortOpt} onChange={sortTodo} />
        </AlignDiv>
        <IncompleteContainer />
      </Section>
      <Section>
        <SubTitle title="완료된 리스트" />
        <CompleteContainer />
      </Section>
    </Container>
  );
}

export default TodoContent;
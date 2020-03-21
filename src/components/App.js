import React from 'react';
// Presentational Component
import Header from 'components/Header'
import SubTitle from 'designComponents/SubTitle';
import Container from 'designComponents/Container';
import Section from 'designComponents/Section';
import ButtonWrap from 'components/ButtonWrap';
import AlignDiv from 'designComponents/AlignDiv';
import SelectBox from 'designComponents/SelectBox';
// Container Components
import AddTodoContainer from 'containers/AddTodoContainer';
import IncompleteContainer from 'containers/IncompleteContainer';
import CompleteContainer from 'containers/CompleteContainer';

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

const onSubmit = () => {
  console.log('button');
};

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Section>
          <SubTitle title="Todo 추가하기" />
          <AddTodoContainer />
        </Section>
        <Section>
          <SubTitle title="미완료 리스트" />
          <AlignDiv align='right' marginTop='0'>
            <SelectBox options={sortOpt} />
          </AlignDiv>
          <IncompleteContainer />
          <ButtonWrap
            align="right"
            mode="incompleted"
            onClick={onSubmit}
            text="COMPLETE"
          />
        </Section>
        <Section>
          <SubTitle title="완료된 리스트" />
          <CompleteContainer />
          <ButtonWrap
            align="right"
            mode="completed"
            onClick={onSubmit}
            text="RESTORE"
          />
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default App;
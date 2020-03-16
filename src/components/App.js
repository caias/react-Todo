import React from 'react';
// Presentational Component
import Header from 'components/Header'
import SubTitle from 'components/SubTitle';
import Container from 'components/Container';
import Section from 'components/Section';
// Container Components
import IncompleteContainer from 'containers/IncompleteContainer';
import CompleteContainer from 'containers/CompleteContainer';
import FormContainer from 'containers/FormContainer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Section>
          <SubTitle title="Todo 추가하기" />
          <FormContainer />
        </Section>
        <Section>
          <SubTitle title="미완료 리스트" />
          <IncompleteContainer />
        </Section>
        <Section>
          <SubTitle title="완료된 리스트" />
          <CompleteContainer />
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default App;
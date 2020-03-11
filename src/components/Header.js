import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: .8rem 1rem;
  background-color: #f8f9fa;
  h1 {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const Header = () => {
  return(
    <Section>
      <h1>프론트엔드 워밍업! - TODO List</h1>
    </Section>
  );
}

export default Header;
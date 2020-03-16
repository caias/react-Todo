import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: #fff;
  border-radius: .25rem;
  overflow: hidden;
  padding: 1.25rem;
  margin-top: 2rem;
`;

const Section = ({children}) => {
  return (
    <SectionContainer>{children}</SectionContainer>
  );
}

export default Section;
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: .8rem 1rem;
  color: #000;
  h1 {
    font-size: 2rem;
    line-height: 1.5;
    text-align: center;
  }
`;

const Header = () => {
  return(
    <HeaderContainer>
      <h1>프론트엔드 워밍업! - TODO List</h1>
    </HeaderContainer>
  );
}

export default Header;
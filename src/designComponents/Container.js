import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  overflow: hidden;
  padding: 0 45px 45px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = (props) => {
  const {
    children,
  } = props;
  return (
    <MainContainer>{children}</MainContainer>
  );
}

export default Container;
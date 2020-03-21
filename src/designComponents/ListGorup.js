import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background-color: #ebecf0;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1.25rem;
  margin-top: 2rem;
`;

const ListGroup = ({ children }) => {
  return (
    <DIV>{children}</DIV>
  );
}

export default ListGroup;
import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.h2`
  margin-bottom: .75rem;
  font-size: 1.4rem;
  line-height: 1;
`;

const CardTitle = (props) => {
  const { title } = props;

  return(
    <SubTitle>{title}</SubTitle>
  );
}

export default CardTitle;
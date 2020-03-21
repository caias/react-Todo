import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  margin-bottom: .75rem;
  font-size: 1.4rem;
  line-height: 1;
`;

const CardTitle = (props) => {
  const { title } = props;

  return(
    <H2>{title}</H2>
  );
}

export default CardTitle;
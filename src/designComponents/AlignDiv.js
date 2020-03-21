import React from 'react';
import styled from 'styled-components';

const DIV = styled.div(props => ({
  textAlign: props.align || 'center',
  marginTop: props.marginTop || '1.25rem',
}));

const AlignDiv = (props) => {
  const {
    children,
    align,
    marginTop,
  } = props;

  return (
    <DIV align={align} marginTop={marginTop}>
      {children}
    </DIV>
  );
}

export default AlignDiv;
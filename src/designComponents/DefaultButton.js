import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;
  user-select: none;
  padding: .375rem .75rem;
  border-radius: .25rem;
  background-color: ${props => props.mode === 'add' ? 'gray' : props.theme[props.mode].submitButtonBg};
  border: 1px solid ${props => props.mode === 'add' ? 'gray' : props.theme[props.mode].submitButtonBg};
  &hover{
    text-decoration: none;
  }
`;

const DefaultButton = (props) => {
  const { 
    mode,
    text,
    onClick
  } = props;

  return (
    <Button onClick={onClick} mode={mode}>{text}</Button>
  );
}

export default DefaultButton;

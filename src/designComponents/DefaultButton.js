import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  color: #999;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  vertical-align: middle;
  user-select: none;
  padding: .375rem .75rem;
  border-radius: 1rem;
  background-color: #ebecf0;
  outline:none;
  transition: all .25s ease;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  &:hover {
    transition: all .25s ease;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    transition: all .25s ease;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
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

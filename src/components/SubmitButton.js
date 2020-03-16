import React, {} from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  text-align: right;
  margin-top: 1.25rem;
`;

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

const SubmitButton = (props) => {
  const { mode, text, onClick } = props;

  return(
    <DIV>
      <Button onClick={onClick} mode={mode}>{text}</Button>
    </DIV>
  );
}

export default SubmitButton;
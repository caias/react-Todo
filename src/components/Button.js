import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  text-align: right;
  margin-top: 1.25rem;
`;

const Button = (props) => {
  const { type, text } = props;

  const ButtonType = styled.button`
    cursor: pointer;
    color: #fff;
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    vertical-align: middle;
    user-select: none;
    padding: .375rem .75rem;
    border-radius: .25rem;
    background-color: ${props => type === 'add' ? '#6c757d' : props.theme[type].submitButtonBg};
    border: 1px solid ${props => type === 'add' ? '#6c757d' : props.theme[type].submitButtonBg};
    &hover{
      text-decoration: none;
    }
  `;

  return(
    <DIV>
      <ButtonType data-submit={type}>{text}</ButtonType>
    </DIV>
  );
}

export default Button;
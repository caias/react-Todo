import React, { useState } from 'react';
import styled from 'styled-components';

const Anchor = styled.a.attrs({ href: '#' })`
  padding: .75rem 1.25rem;
  text-align: left;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
  border-top: 1px solid rgba(0,0,0,.125);
  color: ${props => props.theme[props.mode].fontColor};
  &:hover{
    text-decoration: none;
    color: #0056b3;
  }
  &.active{
    background-color: ${props => props.theme[props.mode].itemActiveBg};
    color: ${props => props.theme[props.mode].fontActiveColor};
  }
  small {
    font-size:80%;
    font-weight: 400;
  }
`;

const TodoItem = (props) => {
  const {
    title,
    updateDate,
    mode,
    allCheckHandler,
  } = props;

  function isAllCheck() {
    const item = document.querySelectorAll(`[data-item=${mode}]`);
    return Array.from(item).every(value => value.classList.contains('active'));
  }
  
  function onClick(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
    allCheckHandler(isAllCheck());
  }

  return(
    <Anchor data-item={mode} onClick={onClick} mode={mode}>
      <span>{title}</span>
      <small>{updateDate}</small>
    </Anchor>
  );
}

export default TodoItem;
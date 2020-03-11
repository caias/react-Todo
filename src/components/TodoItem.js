import React from 'react';
import styled from 'styled-components';

const TodoItem = (props) => {
  console.log(props)
  const {
    id,
    type,
    title,
    updateDate,
  } = props;

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
    color: ${props => props.theme[type].fontColor};
    &:hover{
      text-decoration: none;
      color: #0056b3;
    }
    &.active{
      background-color: ${props => props.theme[type].itemActiveBg};
      color: ${props => props.theme[type].fontActiveColor};
    }
    small {
      font-size:80%;
      font-weight: 400;
    }
  `;

  return(
    <Anchor data-id={id}>
      <span>{title}</span>
      <small>{updateDate}</small>
    </Anchor>
  );
}

export default TodoItem;
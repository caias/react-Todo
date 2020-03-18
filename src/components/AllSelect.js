import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: .75rem 1.25rem;
  text-align: left;
  background-color: transparent;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
  color: ${props => props.theme[props.mode].fontColor};
  &.active{
    background-color: ${props => props.theme[props.mode].itemActiveBg};
    color: ${props => props.theme[props.mode].fontActiveColor};
  }
`;

const AllSelect = (props) => {
  const {
    mode,
    activeStatus,
    allCheckHandler,
  } = props;

  function onClick(e) {
    const item = document.querySelectorAll(`[data-item=${mode}]`)
    const isActive = activeStatus === true;
    const method = isActive ? 'remove' : 'add';

    e.preventDefault();
    allCheckHandler(!activeStatus);
    Array.from(item).forEach(value => value.classList[method]('active'));
  }

  return(
    <Button className={activeStatus ? 'active' : ''} onClick={onClick} mode={mode}>전체선택</Button>
  );
};

export default AllSelect;
import React from 'react';
import styled from 'styled-components';

const AllDeleteButton = (props) => {
  const { type } = props;

  const Button = styled.button`
    padding: .75rem 1.25rem;
    text-align: left;
    background-color: transparent;
    width: 100%;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 500;
    color: ${props => props.theme[type].fontColor};
    &.active{
      background-color: ${props => props.theme[type].itemActiveBg};
      color: ${props => props.theme[type].fontActiveColor};
    }
  `;

  return(
    <Button data-all-delete={type}>전체선택</Button>
  );
};

export default AllDeleteButton;
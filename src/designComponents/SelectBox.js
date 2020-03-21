import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 150px;
  height: 38px;
  padding: .375rem .75rem;
  color: #999;
  border-radius: 1rem;
  background-color: #ebecf0;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all .25s ease;
  outline: none;
  font-size: 1rem;
  &:hover {
    transition: all .25s ease;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
`;

const SelectBox = (props) => {
  const { 
    options,
    onChange,
  } = props;

  return (
    <Select onChange={(e) => onChange(e.target.value)}>
      {
        options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)
      }
    </Select>
  );
};

export default SelectBox;
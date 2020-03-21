import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 150px;
  height: 38px;
  padding: .375rem .75rem;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  background-color: #fff;
  font-size: 1rem;
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
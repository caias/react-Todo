import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  color: #495057;
  background-color: #ebecf0;
  border-radius: 1rem;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  -webkit-appearance: none;
  line-height: 1.5;
  padding: .375rem .75rem;
  font-size: 1rem;
  height: 38px;
  transition: all .25s ease;
  outline: none;
  &:focus{
    transition: all .25s ease;
    box-shadow:  inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

const InputText = forwardRef((props, ref) => {
  const {
    value,
    onChange,
    placeholder,
  } = props;

  return (
    <Input onChange={onChange} ref={ref} value={value} placeholder={placeholder} />
  );
});

export default InputText;
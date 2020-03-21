import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  line-height: 1.5;
  padding: .375rem .75rem;
  font-size: 1rem;
  height: 38px;
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
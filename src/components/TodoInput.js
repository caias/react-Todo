import React, { useState } from 'react';
import styled from 'styled-components';
// Presentational Component
import SubmitButton from 'components/SubmitButton';
// util
import { getDate } from 'utils/date'

const limit = 30;
const Input = styled.input.attrs({ 
    type: 'text',
    placeholder: `${limit}자내로 적어주세요.`
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

const TodoInput = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (!value) {
      alert('내용이 없습니다.');
      return;
    } else if (value.length > limit) {
      alert(`글자수가 ${limit}자를 초과하였습니다.`);

      const modifyText = value.slice(0, limit - 1);
      setValue(modifyText);
      return;
    }

    const date = getDate();
    addTodo(value, date);
    setValue('');
  }

  return (
    <React.Fragment>
      <Input onChange={onChange} value={value}/>
      <SubmitButton mode="add" onClick={onClick} text="추가하기" />
    </React.Fragment>
  );
}

export default TodoInput;
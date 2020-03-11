import React from 'react';
import styled from 'styled-components';
import SubTitle from 'components/SubTitle';
import Button from 'components/Button';

const Input = styled.input.attrs({ 
    type: 'text',
    placeholder: '30자 이내로 입력해주세요.',
    "data-input": "addTodo"
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

const TodoInput = () => {
  return (
    <React.Fragment>
      <SubTitle title="리스트 추가하기" />
      <Input />
      <Button type="add" text="추가하기" />
    </React.Fragment>
  );
}

export default TodoInput;
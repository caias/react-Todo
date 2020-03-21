import React, { useState, useRef } from 'react';
// Presentational Component
import ButtonWrap from 'components/ButtonWrap';
import InputText from 'designComponents/InputText';
// util
import { getDate } from 'utils/date'

const limit = 30;

const TodoInput = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState('');
  const inputValue = useRef();
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    const currentText = inputValue.current.value;
    
    if (!currentText) {
      alert('내용이 없습니다.');
      return;
    } else if (currentText.length > limit) {
      alert(`글자수가 ${limit}자를 초과하였습니다.`);

      const modifyText = currentText.slice(0, limit - 1);
      setValue(modifyText);
      return;
    }

    const date = getDate();
    addTodo(currentText, date);
    setValue('');
  }

  return (
    <React.Fragment>
      <InputText
        ref={inputValue}
        value={value}
        onChange={onChange}
        placeholder={`${limit}자내로 적어주세요.`}
      />
      <ButtonWrap
        align="right"
        mode="add"
        onClick={onSubmit}
        text="ADD"
      />
    </React.Fragment>
  );
}

export default TodoInput;
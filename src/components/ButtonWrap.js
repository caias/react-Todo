import React, { memo } from 'react';
import AlignDiv from 'designComponents/AlignDiv';
import DefaultButton from 'designComponents/DefaultButton';

const ButtonWrap = (props) => {
  const {
    align,
    marginTop,
  } = props;

  return(
    <AlignDiv align={align} marginTop={marginTop}>
      <DefaultButton {...props} />
    </AlignDiv>
  );
};

export default memo(ButtonWrap);
import React, { memo } from 'react';
import styled from 'styled-components';

const Anchor = styled.a.attrs({ href: '#' })`
  padding: .75rem 1.25rem;
  color: #4d33dc;
  background-color: #ebecf0;
  box-shadow: ${props => props.active ? 
    'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff' :
    '-2px -2px 5px #fff, 2px 2px 5px #babecc'
  };
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
  transition: all .25s ease;
  ~ a{
    margin-top: .5rem;
  }
  small{
    font-size: 80%;
    vertical-align:middle;
    padding-top: 5px;
  }
`;

const ListItem = (props) => {
  const {
    text,
    index,
    title,
    updateDate,
    active,
    onClick,
    children,
  } = props;

  return (
    <Anchor onClick={onClick} active={active}>
      {!children && text}
      {
        children &&
        <React.Fragment>
          <span>{title}</span>
          <small>{updateDate}</small>
        </React.Fragment>
      }
    </Anchor>
  );
};

const compare = (prevProps, nextProps) => prevProps.title === nextProps.title;

export default memo(ListItem, compare);
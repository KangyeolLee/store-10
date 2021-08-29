import React, { useContext, useRef } from 'react';
import * as S from './styles';
import { Context } from './TabContext';

interface TabProps {
  label: string;
  index: number;
}

const Tab = ({ label, index }: TabProps) => {
  const { value, setValue } = useContext(Context);
  const topRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (topRef.current) {
      topRef.current.parentElement?.parentElement?.nextElementSibling?.scrollIntoView(
        { behavior: 'smooth' }
      );
    }
    setValue(index);
  };

  return (
    <S.TabTitle
      ref={topRef}
      className={value === index ? 'active' : ''}
      onClick={handleClick}
      data-index={index}
    >
      {label}
    </S.TabTitle>
  );
};

export default Tab;

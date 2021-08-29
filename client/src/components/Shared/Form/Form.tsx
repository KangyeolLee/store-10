import React from 'react';
import * as S from './styles';

export interface IForm {
  children: React.ReactNode;
  gap?: number;
  onSubmit: (e: React.FormEvent) => void;
}

const Form = ({ children, gap, onSubmit }: IForm) => {
  return (
    <S.Form onSubmit={onSubmit} gap={gap}>
      {children}
    </S.Form>
  );
};

export default Form;

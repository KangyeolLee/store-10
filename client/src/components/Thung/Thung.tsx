import React from 'react';
import { thung } from '@/assets';
import * as S from './styles';

interface IThungProps {
  title: string;
  className?: string;
}

const Thung = ({ title, className }: IThungProps) => {
  return (
    <S.ThungContainer className={className}>
      <img src={thung} />
      <S.Description>{title}</S.Description>
    </S.ThungContainer>
  );
};

export default Thung;

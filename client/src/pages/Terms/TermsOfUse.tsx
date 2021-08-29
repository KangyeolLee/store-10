import React from 'react';
import * as S from './styles';
import { TERMS_OF_USE } from '@/utils/constant/terms';
import Title from '@/components/Shared/Title';

const TermsOfUse = () => {
  return (
    <S.Terms className="container">
      <Title className="title" level={4}>
        이용약관
      </Title>
      <S.TextWrapper>{TERMS_OF_USE}</S.TextWrapper>
    </S.Terms>
  );
};

export default TermsOfUse;

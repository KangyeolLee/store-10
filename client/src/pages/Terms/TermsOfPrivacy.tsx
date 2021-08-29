import Title from '@/components/Shared/Title';
import { TERMS_OF_PRIVACY } from '@/utils/constant/terms';
import React from 'react';
import * as S from './styles';

const TermsOfPrivacy = () => {
  return (
    <S.Terms className="container">
      <Title className="title" level={4}>
        개인정보처리방침
      </Title>
      <S.TextWrapper>{TERMS_OF_PRIVACY}</S.TextWrapper>
    </S.Terms>
  );
};

export default TermsOfPrivacy;

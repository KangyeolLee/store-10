import React from 'react';
import * as S from './styles';

const CardWrapper = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return <S.CardWrapper>{children}</S.CardWrapper>;
};

export default CardWrapper;

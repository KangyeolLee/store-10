import React from 'react';
import * as S from '../styles';

const CardSkeleton = () => {
  return (
    <S.SkeletonCard>
      <S.SkeletonImg />
      <S.SkeletonTitle />
      <S.SkeletonPrice />
    </S.SkeletonCard>
  );
};

export default CardSkeleton;

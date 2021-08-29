import { PanelWrapper, TopArea } from '@/components/ProductDetails/styles';
import React from 'react';
import * as S from '../styles';

const ReviewSkeleton = () => {
  return (
    <PanelWrapper>
      <TopArea>
        <S.SkeletonTopAreaTitle />
        <S.SkeletonTopAreaButton />
      </TopArea>
      <S.SkeletonTopRatingArea />
    </PanelWrapper>
  );
};

export default ReviewSkeleton;

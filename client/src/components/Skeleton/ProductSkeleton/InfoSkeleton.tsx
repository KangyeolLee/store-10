import React from 'react';
import { ProductInfo, ProductOrder } from '@/components/ProductDetails/styles';
import * as S from '../styles';

const InfoSkeleton = () => {
  return (
    <ProductInfo>
      <S.SkeletonThumbnail />
      <ProductOrder>
        <S.SkeletonProductTitle />
        <S.SkeletonProductContent />

        <S.SkeletonProductContent />
      </ProductOrder>
    </ProductInfo>
  );
};

export default InfoSkeleton;

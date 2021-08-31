import React from 'react';
import { ProductInfo, ProductOrder } from '@/components/ProductDetails/styles';
import * as S from '../styles';

const InfoSkeleton = ({ className }: { className?: string }) => {
  return (
    <ProductInfo className={className}>
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

import React from 'react';
import * as S from './styles';
import { ProductDetailTab } from '@/components/Shared/Tab';
import ProductInfo from '@/components/ProductDetails/ProductInfo';

const Detail = () => {
  return (
    <S.Detail>
      <ProductInfo />
      <ProductDetailTab />
    </S.Detail>
  );
};

export default Detail;

import React from 'react';
import * as S from './styles';
import { calculateDiscount, wonFormat } from '@/utils/helper';
import { IOrderProduct } from '@/types';
import Image from '@/components/Shared/Image';

interface IProps {
  products: IOrderProduct[];
}

const OrderProducts = ({ products }: IProps) => {
  return (
    <article>
      <S.OrderProductsHeader>
        <span>주문상품</span>
      </S.OrderProductsHeader>
      <S.OrderProductsList>
        {products.map((product) => (
          <S.OrderProductsItem key={product.id}>
            <S.ImgWrapper>
              <Image src={product.img} alt="주문상품 이미지" />
            </S.ImgWrapper>
            <S.ItemInfo>
              <S.ItemInfoName>{product.title}</S.ItemInfoName>
              <S.ItemInoPriceWrapper>
                <S.ItemInfoPrice
                  className={product.discount ? 'strikethrough' : undefined}
                >
                  {wonFormat(+product.price)}
                </S.ItemInfoPrice>
                {!!product.discount && (
                  <S.ItemInfoPrice className="discount">
                    {wonFormat(
                      calculateDiscount({
                        price: +product.price,
                        discount: product.discount,
                      })
                    )}
                  </S.ItemInfoPrice>
                )}
                <S.ItemInfoCount> · {product.count}개</S.ItemInfoCount>
              </S.ItemInoPriceWrapper>
            </S.ItemInfo>
          </S.OrderProductsItem>
        ))}
      </S.OrderProductsList>
    </article>
  );
};

export default OrderProducts;

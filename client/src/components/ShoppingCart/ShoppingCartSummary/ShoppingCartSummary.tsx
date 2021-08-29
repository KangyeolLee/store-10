import React, { useCallback } from 'react';
import * as S from './styles';
import { wonFormat, calculateDiscount } from '@/utils/helper';
import Button from '@/components/Shared/Button';
import { usePostOrder } from '@/hooks/queries/order';
import { ICart } from '@/types';

interface ISShoppingCartSummaryProps {
  disabled?: boolean;
  checkedItems: ICart[];
}

const ShoppingCartSummary = ({
  disabled,
  checkedItems,
}: ISShoppingCartSummaryProps) => {
  const productCount = checkedItems.length;
  const totalPrice = checkedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const discount: number = checkedItems.reduce((sum, item) => {
    if (item.discount) {
      return (
        sum +
        (item.price -
          calculateDiscount({ price: item.price, discount: item.discount })) *
          item.count
      );
    }
    return sum;
  }, 0);
  const deliveryFee = disabled || totalPrice >= 30000 ? 0 : 2500;
  const sum = totalPrice + deliveryFee - discount;
  const { mutate } = usePostOrder();
  const buyButtonOnClick = useCallback(() => {
    mutate({
      products: checkedItems.map((item) => ({
        count: item.count,
        id: item.productId,
      })),
      status: 'created',
    });
  }, [mutate, checkedItems]);

  return (
    <S.ShoppingCartSummaryWrapper>
      <S.ShoppingCartSummary>
        <S.ShoppingCartSummaryRow>
          <dt>총 상품금액</dt>
          <dd>{wonFormat(totalPrice)}</dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>총 배송비</dt>
          <dd>
            {!disabled && '+'}
            {disabled ? wonFormat(0) : wonFormat(deliveryFee)}
          </dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>총 할인금액</dt>
          <dd className={discount > 0 ? 'red' : undefined}>
            {!!discount && '- '}
            {wonFormat(discount)}
          </dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>결제 금액</dt>
          <dd>{wonFormat(sum)}</dd>
        </S.ShoppingCartSummaryRow>
      </S.ShoppingCartSummary>
      <Button
        type="button"
        color="primary"
        disabled={disabled}
        onClick={buyButtonOnClick}
      >
        {productCount}개 상품 구매하기
      </Button>
    </S.ShoppingCartSummaryWrapper>
  );
};

export default ShoppingCartSummary;

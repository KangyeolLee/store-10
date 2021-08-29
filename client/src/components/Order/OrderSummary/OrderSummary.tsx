import React, { useState } from 'react';
import * as S from './styles';
import { wonFormat, calculateDiscount } from '@/utils/helper';
import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';
import Checkbox from '@/components/Shared/Checkbox';
import { useDeleteCart } from '@/hooks/queries/cart';
import { IAddress, IOrder } from '@/types';
import { DELIVERY_DISCOUNT_CONDITION } from '@/contstants';

interface IProps {
  totalPrice: number;
  totalProductsDiscount: number;
  deliveryFee: number;
  productCount: number;
  data: IOrder | undefined;
  address: IAddress | null;
  updateOrder: () => void;
  couponDiscount?: number;
}

const OrderSummary = ({
  totalPrice,
  totalProductsDiscount,
  deliveryFee,
  productCount,
  data,
  address,
  updateOrder,
  couponDiscount,
}: IProps) => {
  const [agree, setAgree] = useState(false);
  const discountDeliveryFee =
    totalPrice > DELIVERY_DISCOUNT_CONDITION ? 2500 : 0;
  const { mutate } = useDeleteCart();
  const couponDiscountAmount =
    totalPrice -
    calculateDiscount({
      price: totalPrice,
      discount: couponDiscount || 0,
    });

  const sum =
    totalPrice +
    deliveryFee -
    totalProductsDiscount -
    couponDiscountAmount -
    discountDeliveryFee;
  return (
    <S.OrderSummaryWrapper>
      <S.OrderSummary>
        <Title level={5}>결제 금액</Title>
        <S.OrderSummaryRow>
          <dt>총 상품금액</dt>
          <dd>{wonFormat(totalPrice)}</dd>
        </S.OrderSummaryRow>
        {!!totalProductsDiscount && (
          <S.OrderSummaryRow>
            <dt>총 상품 할인</dt>
            <dd className="red">- {wonFormat(totalProductsDiscount)}</dd>
          </S.OrderSummaryRow>
        )}
        <S.OrderSummaryRow>
          <dt>총 배송비</dt>
          <dd>
            {deliveryFee > 0 ? '+' : ''} {wonFormat(deliveryFee)}
          </dd>
        </S.OrderSummaryRow>
        {totalPrice > DELIVERY_DISCOUNT_CONDITION && (
          <S.OrderSummaryRow>
            <dt>배송비 할인</dt>
            <dd className="red">- {wonFormat(discountDeliveryFee)}</dd>
          </S.OrderSummaryRow>
        )}
        <S.OrderSummaryRow>
          <dt>쿠폰 사용</dt>
          <dd className={couponDiscountAmount > 0 ? 'red' : undefined}>
            {couponDiscountAmount > 0 ? '-' : ''}{' '}
            {wonFormat(couponDiscountAmount)}
          </dd>
        </S.OrderSummaryRow>
        <S.Divider />
        <S.OrderSummaryRow>
          <dt>최종 결제 금액</dt>
          <dd>{wonFormat(sum)}</dd>
        </S.OrderSummaryRow>
        <S.Divider />
        <S.OrderSummaryFooter>
          <Checkbox
            label="아래 내용에 모두 동의합니다. (필수)"
            checked={agree}
            onChange={(e) => setAgree(e.currentTarget.checked)}
          />
          <S.OrderAgreementWrapper>
            <S.OrderAgreement>
              ·본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
            </S.OrderAgreement>
            <S.OrderAgreement>
              ·사실, 개인정보를 수집 및 이용하는 법을 모릅니다.
            </S.OrderAgreement>
          </S.OrderAgreementWrapper>
        </S.OrderSummaryFooter>
      </S.OrderSummary>
      <Button
        type="button"
        disabled={!agree || !address}
        color="primary"
        onClick={() => {
          updateOrder();
          const ids = data?.products.map((product) => product.id);
          if (ids) mutate(ids);
        }}
      >
        {productCount}개 상품 구매하기
      </Button>
    </S.OrderSummaryWrapper>
  );
};

export default OrderSummary;

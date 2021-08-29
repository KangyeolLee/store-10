import React, { Dispatch } from 'react';
import * as S from './styles';
import { IOrder } from '@/types';

interface IProps {
  order: Partial<IOrder>;
  setOrder: Dispatch<Partial<IOrder>>;
}

const OrderPayment = ({ order, setOrder }: IProps) => {
  return (
    <article>
      <S.OrderPaymentHeader>
        <span>결제수단</span>
      </S.OrderPaymentHeader>
      <S.OrderPaymentWrpper>
        <S.Payment
          className={order.payment_id === 1 ? 'selected' : undefined}
          onClick={() => setOrder({ ...order, payment_id: 1 })}
        >
          <img
            width={100}
            height={100}
            src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/pay1.png"
          />
          격려 한마디
        </S.Payment>
        <S.Payment
          className={order.payment_id === 2 ? 'selected' : undefined}
          onClick={() => setOrder({ ...order, payment_id: 2 })}
        >
          <img
            width={100}
            height={100}
            src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/pay3.png"
          />
          칭찬 한마디
        </S.Payment>
      </S.OrderPaymentWrpper>
    </article>
  );
};

export default OrderPayment;

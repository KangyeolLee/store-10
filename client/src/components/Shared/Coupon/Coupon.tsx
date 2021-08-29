import React from 'react';
import Logo from '../Logo';
import * as S from './styles';

interface ICoupon {
  name: string;
  amount: number;
  isValid: boolean;
}

const Coupon = ({ name, amount, isValid }: ICoupon) => {
  return (
    <S.Coupon>
      <S.CouponImageWrapper>
        <img
          src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/coupon.png"
          alt="쿠폰"
        />
        {!isValid && <S.CouponImageHover>사용완료</S.CouponImageHover>}
      </S.CouponImageWrapper>
      <S.CouponBody>
        <S.CouponHeader isValid={isValid}>
          <span className="coupon-title">{name}</span>
          <span className="usable">{isValid ? '사용가능' : '사용불가'}</span>
        </S.CouponHeader>
        <S.CouponDetail>
          <Logo width={100} />
          <S.Discount isValid={isValid}>
            {amount}
            <span> %</span>
          </S.Discount>
        </S.CouponDetail>
      </S.CouponBody>
      <S.CouponTail isValid={isValid} />
    </S.Coupon>
  );
};

export default Coupon;

import React, { useState } from 'react';
import * as S from './styles';
import Coupon from '@/components/Shared/Coupon';
import { useGetUserCoupons } from '@/hooks/queries/coupon';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import { useRegisterUserCoupon } from '@/hooks/queries/coupon';
import Title from '@/components/Shared/Title';

const MyCoupon = () => {
  const { data } = useGetUserCoupons();
  const { mutate, isLoading, error, reset } = useRegisterUserCoupon();
  const [inputValue, setInputValue] = useState('');
  const registerCoupon = () => {
    mutate(inputValue, {
      onSuccess() {
        setInputValue('');
      },
    });
  };
  const coupons = data?.sort((a, b) => +b.is_valid - +a.is_valid) || [];
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    reset();
  };
  return (
    <S.MyCoupon>
      <S.CouponSection>
        <Title level={5}>쿠폰 등록</Title>
        <S.RegisterCoupon>
          <Input
            type="text"
            name="coupon"
            label="Outlined"
            fullWidth
            placeholder="쿠폰 코드를 입력해주세요"
            value={inputValue}
            onChange={onChangeInput}
            error={!!error}
            helperText="유효한 쿠폰이 아닙니다."
          />
          <Button
            type="button"
            color="primary"
            disabled={isLoading}
            onClick={registerCoupon}
          >
            등록
          </Button>
        </S.RegisterCoupon>
      </S.CouponSection>

      <S.CouponSection>
        <Title className="sub-title" level={5}>
          내 쿠폰
        </Title>

        <S.CouponDisplay>
          {coupons.map((coupon) => (
            <Coupon
              key={coupon.id}
              name={coupon.name}
              amount={coupon.amount}
              isValid={coupon.is_valid}
            />
          ))}
        </S.CouponDisplay>
      </S.CouponSection>
    </S.MyCoupon>
  );
};

export default MyCoupon;

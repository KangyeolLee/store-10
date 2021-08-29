import React, { Dispatch, useState } from 'react';
import * as S from './styles';
import {
  useGetUserValidCoupons,
  useRegisterUserCoupon,
} from '@/hooks/queries/coupon';
import Coupon from '@/components/Shared/Coupon';
import { IUserCoupon } from '@/types';
import { SelectedSVG, DownChevronSVG, UpChevronSVG } from '@/assets/svgs';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import LabelButton from '@/components/Shared/LabelButton';
import useModal from '@/hooks/useModal';
import CouponModal from '@/components/Shared/Modal/CouponModal';

interface IProps {
  setSelectedCoupon: Dispatch<IUserCoupon | null>;
  selectedCoupon: IUserCoupon | null;
}

const OrderCoupon = ({ setSelectedCoupon, selectedCoupon }: IProps) => {
  const { data } = useGetUserValidCoupons();
  const { mutate, isLoading, error, reset } = useRegisterUserCoupon();
  const [inputValue, setInputValue] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const [openModal, toggleModal] = useModal(false);
  const registerCoupon = () => {
    mutate(inputValue, {
      onSuccess() {
        setInputValue('');
      },
    });
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    reset();
  };

  return (
    <S.OrderCoupon>
      <S.OrderCouponHeader>
        <span>쿠폰</span>
        <LabelButton onClick={toggleModal} disabled={!!!(data || []).length}>
          {!!(data || []).length ? '선택' : '사용 가능한 쿠폰이 없습니다 '}
        </LabelButton>
      </S.OrderCouponHeader>
      <S.RegisterCouponWrapper>
        <S.CollapsibleWrapper onClick={() => setCollapsed(!collapsed)}>
          <span>쿠폰 코드가 있으신가요?</span>
          {collapsed ? (
            <UpChevronSVG width={15} height={15} />
          ) : (
            <DownChevronSVG width={15} height={15} />
          )}
        </S.CollapsibleWrapper>
        <S.RegisterCoupon className={collapsed ? 'collapsed' : ''}>
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
      </S.RegisterCouponWrapper>
      {selectedCoupon && (
        <S.CouponWrapper>
          <Coupon
            name={selectedCoupon.name}
            amount={selectedCoupon.amount}
            isValid={selectedCoupon.is_valid}
          />
        </S.CouponWrapper>
      )}
      {openModal && (
        <CouponModal
          toggleModal={toggleModal}
          coupons={data}
          setSelectedCoupon={setSelectedCoupon}
          selectedCoupon={selectedCoupon}
        />
      )}
    </S.OrderCoupon>
  );
};

export default OrderCoupon;

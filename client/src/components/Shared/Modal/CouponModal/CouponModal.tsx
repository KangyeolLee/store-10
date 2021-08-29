import React, { Dispatch } from 'react';
import * as S from './styles';
import Button from '@/components/Shared/Button';
import { IUserCoupon } from '@/types';
import { SelectedSVG } from '@/assets/svgs';
import Coupon from '@/components/Shared/Coupon';
import Title from '../../Title';

interface IProps {
  toggleModal: () => void;
  coupons?: IUserCoupon[];
  setSelectedCoupon: Dispatch<IUserCoupon | null>;
  selectedCoupon: IUserCoupon | null;
}
const CouponModal = ({
  toggleModal,
  coupons,
  setSelectedCoupon,
  selectedCoupon,
}: IProps) => {
  const selectCoupon = (coupon: IUserCoupon) => {
    if (selectedCoupon === coupon) {
      setSelectedCoupon(null);
    } else {
      setSelectedCoupon(coupon);
    }
  };

  const close = () => {
    setSelectedCoupon(null);
    toggleModal();
  };

  return (
    <S.CouponModalLayout toggleModal={toggleModal}>
      <Title level={4}>보유 쿠폰</Title>
      <S.CouponModal>
        {(coupons?.slice(0) || []).map((coupon) => {
          const isSelected = selectedCoupon === coupon;
          return (
            <S.CouponWrapper
              className={isSelected ? 'selected' : undefined}
              onClick={() => selectCoupon(coupon)}
              key={coupon.id}
            >
              {isSelected && <SelectedSVG width={120} height={120} />}
              <Coupon
                name={coupon.name}
                amount={coupon.amount}
                isValid={coupon.is_valid}
              />
            </S.CouponWrapper>
          );
        })}
      </S.CouponModal>
      <S.CouponModalFooter>
        <Button
          type="button"
          color="primary"
          disabled={!setSelectedCoupon}
          onClick={toggleModal}
        >
          선택
        </Button>
        <Button type="button" color="white" onClick={close}>
          취소
        </Button>
      </S.CouponModalFooter>
    </S.CouponModalLayout>
  );
};

export default CouponModal;

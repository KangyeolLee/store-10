import React, { useState } from 'react';
import * as S from './styles';
import MyPageAside from '@/components/MyPage/MyPageAside';
import OrderHistory from '@/components/MyPage/OrderHistory';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';
import { Redirect } from '@/lib/Router';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import MyReviews from '@/components/MyPage/MyReviews';
import MyQuestions from '@/components/MyPage/MyQuestions';
import MyCoupon from '@/components/MyPage/MyCoupon';
import ChangeUserInfo from '@/components/MyPage/ChangeUserInfo';
import { CouponSVG, HistorySVG, InquerySVG, RatingSVG } from '@/assets/svgs';

const renderBody = (contentValue: string) => {
  // TODO: router Switch 사용 고민
  if (contentValue === 'orderHistroy') return <OrderHistory />;
  if (contentValue === 'coupon') return <MyCoupon />;
  if (contentValue === 'inqurey') return <MyQuestions />;
  if (contentValue === 'review') return <MyReviews />;
  if (contentValue === 'changeUserInfo') return <ChangeUserInfo />;

  return <div>404</div>;
};

const MyPage = () => {
  const [contentValue, setContentValue] = useState('orderHistroy');

  const contentName = MY_PAGE_NAVIGATIONS.find(
    (nav) => nav.value === contentValue
  )?.name;

  const [user] = useRecoilState(userState);
  if (!user) return <Redirect to="/" />;

  return (
    <>
      <S.MyPagePointBackground />
      <S.MyPageContainer className="container">
        <S.MyPageTitle level={3}>
          {contentName === '주문내역' && <HistorySVG width={40} height={40} />}
          {contentName === '쿠폰' && <CouponSVG width={40} height={40} />}
          {contentName === '상품문의' && <InquerySVG width={40} height={40} />}
          {contentName === '상품후기' && <RatingSVG width={40} height={40} />}
          {contentName}
        </S.MyPageTitle>
        <S.MyPage>
          <MyPageAside
            contentValue={contentValue}
            setContentValue={setContentValue}
          />
          <S.MyPageBody>{renderBody(contentValue)}</S.MyPageBody>
        </S.MyPage>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;

import React, { Dispatch } from 'react';
import * as S from './styles';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';
import { useHistory } from '@/lib/Router';
import { logout } from '@/lib/api/auth/logout';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import {
  CouponSVG,
  HistorySVG,
  InquerySVG,
  RatingSVG,
  Edit,
  LogoutSVG,
} from '@/assets/svgs';

interface IMypageAsideProps {
  setContentValue: Dispatch<string>;
  contentValue: string;
}

interface IMyPageNavigation {
  value: string;
  name: string;
}

const MyPageAside = ({ setContentValue, contentValue }: IMypageAsideProps) => {
  const [user, setUser] = useRecoilState(userState);
  const renderNavigations = () => {
    return MY_PAGE_NAVIGATIONS.filter(
      (item) => item.value !== 'changeUserInfo'
    ).map((nav: IMyPageNavigation) => (
      <li
        key={nav.value}
        onClick={() => setContentValue(nav.value)}
        className={nav.value === contentValue ? 'selected' : undefined}
      >
        {nav.value === 'orderHistroy' && <HistorySVG width={20} height={20} />}
        {nav.value === 'coupon' && <CouponSVG width={20} height={20} />}
        {nav.value === 'inqurey' && <InquerySVG width={20} height={20} />}
        {nav.value === 'review' && <RatingSVG width={20} height={20} />}
        <span className="on_mphone_resolution">{nav.name}</span>
      </li>
    ));
  };

  const { historyPush } = useHistory();

  const onClickChangeUserInfo = () => {
    setContentValue('changeUserInfo');
  };

  const onClickLogout = async () => {
    await logout();
    setUser(null);
    historyPush('/');
  };

  return (
    <S.MyPageAside>
      <S.AsideNav>
        <S.MyPageNavWrapper>
          <S.MyPageUserInfo>
            <S.MyPageGreeting className="on_btw_tab_mob_resolution">
              안녕하세요,
            </S.MyPageGreeting>
            <S.MyPageUserName>
              {user?.name}
              <span>님!</span>
            </S.MyPageUserName>
          </S.MyPageUserInfo>
          <footer>
            <button onClick={onClickChangeUserInfo}>
              <Edit className="only_mobile" width={20} height={20} />
              <span>회원정보 변경</span>
            </button>
            <button onClick={onClickLogout}>
              <LogoutSVG className="only_mobile" width={20} height={20} />
              <span>로그아웃</span>
            </button>
          </footer>
        </S.MyPageNavWrapper>

        <S.MyPageNav>
          <ul>{renderNavigations()}</ul>
        </S.MyPageNav>
      </S.AsideNav>
    </S.MyPageAside>
  );
};

export default MyPageAside;

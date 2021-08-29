import React from 'react';
import * as S from './styles';
import { FaxSVG, InstagramSVG, EmailSVG } from '@/assets/svgs';
import { Link } from '@/lib/Router';
import Logo from '@/components/Shared/Logo';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterTabs className="container">
        <S.FooterTab>
          <S.TabTitle>ABOUT</S.TabTitle>
          <S.TabContent>
            <p>상호 : (주)우아한형제들</p>
            <p>대표 : 김범준 | 사업자등록번호 : 120-87-65763</p>
            <p>통신판매업신고번호 : 2012-서울송파-0515</p>
            <p>주소 : 서울특별시 송파구 위례성대로 2 장은빌딩</p>
          </S.TabContent>
        </S.FooterTab>
        <S.FooterTab>
          <S.TabTitle>NOTICE</S.TabTitle>
          <S.TabContent>
            <Link to="/notice">공지사항</Link>
            <Link to="/terms">이용약관</Link>
            <Link to="/privacy">개인정보</Link>
            <Link to="/vendor">판매처안내</Link>
          </S.TabContent>
        </S.FooterTab>
        <S.FooterTab>
          <S.TabTitle>CONTACT</S.TabTitle>
          <S.TabContent>
            <p>
              <FaxSVG width={20} height={20} /> 050-605-0041
            </p>
            <p>
              <EmailSVG width={20} height={20} /> baemin_store@woowahan.com
            </p>
            <p>
              <InstagramSVG width={20} height={20} /> @baemin_store
            </p>
          </S.TabContent>
        </S.FooterTab>
      </S.FooterTabs>
      <S.FooterBottom className="container">
        <p></p>
        <p>© Woowa Brothers Corp. All right Reserved</p>
        <Logo width={150} />
      </S.FooterBottom>
    </S.Footer>
  );
};

export default Footer;

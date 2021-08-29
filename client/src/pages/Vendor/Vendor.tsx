import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from './styles';

const Vendor = () => {
  return (
    <S.Vendor className="container">
      <Title className="main-title" level={4}>
        판매처안내
      </Title>
      <S.VendorList>
        <Title className="title" level={5}>
          국립현대미술관 서울
        </Title>
        <S.VendorListItem>
          <span>서울 종로구 삼청로 30</span>
          <span>02-3701-9500</span>
        </S.VendorListItem>
        <S.OuterLink
          href="http://www.mmca.go.kr"
          target="_blank"
          title="국립현대미술관 서울 홈페이지"
        >
          http://www.mmca.go.kr
        </S.OuterLink>
      </S.VendorList>

      <S.VendorList>
        <Title className="title" level={5}>
          KT&G 상상마당
        </Title>
        <S.VendorListItem>
          <span>서울 마포구 어울마당로 65 상상마당빌딩</span>
          <span>02-330-6200</span>
        </S.VendorListItem>
        <S.OuterLink
          href="https://www.sangsangmadang.com"
          target="_blank"
          title="KT&G 상상마당 홈페이지"
        >
          https://www.sangsangmadang.com
        </S.OuterLink>
      </S.VendorList>

      <S.VendorList>
        <Title className="title" level={5}>
          N서울타워
        </Title>
        <S.VendorListItem>
          <span>서울 용산구 남산공원길 126</span>
          <span>02-3455-9277</span>
        </S.VendorListItem>
        <S.OuterLink
          href="http://www.nseoultower.com"
          target="_blank"
          title="N서울타워 홈페이지"
        >
          http://www.nseoultower.com
        </S.OuterLink>
      </S.VendorList>

      <S.VendorList>
        <Title className="title" level={5}>
          무신사
        </Title>
        <S.OuterLink
          href="https://store.musinsa.com/baeminstore"
          target="_blank"
          title="무신사 배민스토어 홈페이지"
        >
          https://store.musinsa.com/baeminstore
        </S.OuterLink>
      </S.VendorList>

      <S.VendorList>
        <Title className="title" level={5}>
          카카오톡 선물하기
        </Title>
        <S.VendorListItem>
          <span>카카오톡 앱에서 바로 선물하세요.</span>
        </S.VendorListItem>
      </S.VendorList>

      <S.VendorList>
        <Title className="title" level={5}>
          B마트
        </Title>
        <S.VendorListItem>
          <span>배달의민족 앱에서 바로 배달 받으세요.</span>
        </S.VendorListItem>
      </S.VendorList>

      <S.VendorList>
        <S.VendorListItem className="info">
          <span>판매처에 따라 보유하고 있는 상품이 다를 수 있습니다.</span>
          <span>구매를 원하는 상품은 각 판매처에 문의 후 방문해 주세요.</span>
        </S.VendorListItem>
      </S.VendorList>
    </S.Vendor>
  );
};

export default Vendor;

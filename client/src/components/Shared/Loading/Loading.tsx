import React from 'react';
import * as S from './styles';

const Loading = () => {
  return (
    <S.Loading>
      <img
        src="https://modo-phinf.pstatic.net/20190910_18/1568094190494N8Xcm_GIF/mosaevW8G4.gif?type=w1100"
        alt="로딩이미지"
      />
      <S.LoadingText>로딩중...</S.LoadingText>
    </S.Loading>
  );
};

export default Loading;

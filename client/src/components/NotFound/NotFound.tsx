import React from 'react';
import * as S from './styles';

const NotFound = () => {
  return (
    <S.NotFound>
      <S.AlertArea>
        <S.AlertTag>OOPS!</S.AlertTag>
        <img
          src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/404/baemin.gif"
          alt="놀라는 이미지"
        />
        <S.AlertContent>
          <p className="title">여긴 어디? 나는 누구?</p>
          <p className="sub-title">혹시 길을 잃으셨나요?</p>
        </S.AlertContent>
      </S.AlertArea>
    </S.NotFound>
  );
};

export default NotFound;

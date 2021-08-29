import React from 'react';
import * as S from './styles';

interface IResponseError {
  message?: string;
}

const ResponseError = ({ message }: IResponseError) => {
  return (
    <S.ResponseError>
      <img
        src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/404/error.gif"
        alt="에러 이미지"
      />
      {!!message && <p className="error-text">{message}</p>}
    </S.ResponseError>
  );
};

export default ResponseError;

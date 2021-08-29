import React from 'react';
import Button from '@/components/Shared/Button';
import * as S from './styles';
import { Link } from '@/lib/Router';

interface IError {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const Error = ({ resetErrorBoundary }: IError) => {
  return (
    <S.Error>
      <img
        src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/404/baemin2.gif"
        alt="에러창이미지"
      />
      <p className="error-text">이런! 에러가 발생했어요!</p>
      <S.ButtonArea>
        <Button
          size="Default"
          color="primary"
          type="button"
          onClick={() => resetErrorBoundary()}
        >
          다시시도
        </Button>
        <Button
          size="Default"
          color="black"
          type="button"
          onClick={() => resetErrorBoundary()}
        >
          <Link to="/notice">문의센터</Link>
        </Button>
      </S.ButtonArea>
    </S.Error>
  );
};

export default Error;

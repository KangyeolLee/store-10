import React from 'react';
import { baepang } from '@/assets';
import * as S from './styles';

interface ILogo {
  width?: number;
  height?: number;
}

const Logo = ({ width, height }: ILogo) => {
  return (
    <S.Logo width={width} height={height} src={baepang} alt="로고이미지" />
  );
};

export default Logo;

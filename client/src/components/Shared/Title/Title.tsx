import React from 'react';
import * as S from './style';

interface ITitleProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const Title = ({ children, level, className }: ITitleProps) => {
  switch (level) {
    case 1:
      return <S.H1 className={className}>{children}</S.H1>;
    case 2:
      return <S.H2 className={className}>{children}</S.H2>;
    case 3:
      return <S.H3 className={className}>{children}</S.H3>;
    case 4:
      return <S.H4 className={className}>{children}</S.H4>;
    case 5:
      return <S.H5 className={className}>{children}</S.H5>;
    default:
      return <S.H1 className={className}>{children}</S.H1>;
  }
};

export default Title;

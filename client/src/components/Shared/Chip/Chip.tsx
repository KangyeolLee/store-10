import React from 'react';
import * as S from './style';

export interface IChip {
  color?: string;
  backgroundColor?: string;
  border?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Chip = ({
  children,
  color,
  backgroundColor,
  border,
  className,
  onClick,
}: IChip) => {
  return (
    <S.Chip
      onClick={onClick}
      className={className}
      color={color}
      backgroundColor={backgroundColor}
      border={border}
    >
      {children}
    </S.Chip>
  );
};

export default Chip;

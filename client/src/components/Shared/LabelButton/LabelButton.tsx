import React from 'react';
import * as S from './styles';

interface ILabelButtonProps {
  type?: 'submit' | 'button';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const LabelButton = ({
  type = 'button',
  children,
  onClick,
  disabled,
  className,
}: ILabelButtonProps) => {
  return (
    <S.LabelButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.LabelButton>
  );
};

export default LabelButton;

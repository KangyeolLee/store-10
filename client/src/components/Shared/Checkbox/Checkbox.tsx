import React from 'react';
import { CheckSVG } from '@/assets/svgs';
import * as S from './styles';

interface IProps {
  label?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
const Checkbox = ({
  label,
  onChange,
  value,
  className,
  checked,
  name,
  onClick,
}: IProps) => {
  return (
    <S.Checkbox className={className} onClick={onClick}>
      <input
        name={name}
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <span>
        <CheckSVG width={16} height={16} />
      </span>
      {label}
    </S.Checkbox>
  );
};

export default Checkbox;

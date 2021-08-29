import React from 'react';
import * as S from './style';

interface IInput {
  type: 'number';
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  value: number;
  handleOnChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnMinus: () => void;
  handleClickOnPlus: () => void;
  className?: string;
}

const NumberInput = ({
  type,
  name,
  placeholder,
  min,
  max,
  value,
  handleOnChnage,
  handleClickOnMinus,
  handleClickOnPlus,
  className,
}: IInput) => {
  return (
    <S.NumberInputArea className={className}>
      <S.AdjustButton onClick={handleClickOnMinus}>-</S.AdjustButton>
      <S.NumberInput
        onChange={(e) => handleOnChnage(e)}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
      />
      <S.AdjustButton onClick={handleClickOnPlus}>+</S.AdjustButton>
    </S.NumberInputArea>
  );
};

export default NumberInput;

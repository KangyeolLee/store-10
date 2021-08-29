import React from 'react';
import * as S from './styles';

interface IProps {
  items: {
    value: string | number;
    name: string;
  }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select = ({ items, className, onChange }: IProps) => {
  return (
    <S.Select className={className}>
      <select onChange={onChange}>
        {items.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </S.Select>
  );
};

export default Select;

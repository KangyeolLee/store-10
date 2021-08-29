import React from 'react';
import * as S from './styles';
import { nanoid } from 'nanoid';
import { MoreButtonSVG } from '@/assets/svgs';
import useDropdown from '@/hooks/useDropdown';

export interface IDropDownItem {
  content: string;
  color: string;
  onClickListener: (target: number) => void;
}

interface IDropDown<T> {
  selectedId: number;
  items: Array<T>;
}

const Dropdown = <T extends IDropDownItem>({
  selectedId,
  items,
}: IDropDown<T>) => {
  const [status, handleOnClickDropdown] = useDropdown(0);

  return (
    <S.DropdownButton>
      <MoreButtonSVG
        tabIndex="0"
        onFocus={() => handleOnClickDropdown(selectedId)}
        onBlur={() => handleOnClickDropdown(0)}
        width={20}
        height={20}
      />
      {status === selectedId && (
        <S.DropDown>
          {items.map((item) => (
            <S.DropDownItem
              color={item.color}
              key={nanoid()}
              onMouseDown={() => item.onClickListener(selectedId)}
            >
              {item.content}
            </S.DropDownItem>
          ))}
        </S.DropDown>
      )}
    </S.DropdownButton>
  );
};

export default React.memo(Dropdown);

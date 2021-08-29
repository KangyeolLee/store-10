import { ExchageSVG, GiftSVG, PackageSVG } from '@/assets/svgs';
import React, { useEffect, useState } from 'react';
import * as S from './styles';

interface ICategorySelector {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  selected?: string;
}

const categories: Record<string, string> = {
  'category-gift': '상품',
  'category-package': '택배',
  'category-exchange': '환불',
};

const reverseCategories: Record<string, string> = {
  상품: 'category-gift',
  택배: 'category-package',
  환불: 'category-exchange',
};

const CategorySelector = ({ setCategory, selected }: ICategorySelector) => {
  const [categoryId, setCategoryId] = useState('category-gift');

  useEffect(() => {
    setCategoryId(selected ? reverseCategories[selected] : 'category-gift');
  }, [selected]);

  const handleClickOnCategory = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.each-category');
    setCategory(categories[target?.id ?? 'category-gift']);
    setCategoryId(target?.id ?? 'category-gift');
  };

  return (
    <S.CategorySelector>
      <S.Category
        id="category-gift"
        onClick={handleClickOnCategory}
        className={
          'each-category' + (categoryId === 'category-gift' ? ' selected' : '')
        }
      >
        <GiftSVG width={40} height={40} />
        <span className="category-text on_phone_resolution">상품관련</span>
      </S.Category>

      <S.Category
        id="category-package"
        onClick={handleClickOnCategory}
        className={
          'each-category' +
          (categoryId === 'category-package' ? ' selected' : '')
        }
      >
        <PackageSVG width={40} height={40} />
        <span className="category-text on_phone_resolution">택배관련</span>
      </S.Category>

      <S.Category
        id="category-exchange"
        onClick={handleClickOnCategory}
        className={
          'each-category' +
          (categoryId === 'category-exchange' ? ' selected' : '')
        }
      >
        <ExchageSVG width={40} height={40} />
        <span className="category-text on_phone_resolution">환불관련</span>
      </S.Category>
    </S.CategorySelector>
  );
};

export default CategorySelector;

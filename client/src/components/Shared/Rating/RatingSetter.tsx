import React, { useEffect, useState } from 'react';
import { ErrorMessage } from '@/components/Shared/Input/style';
import * as S from './styles';

const COUNT_STAR = 5;

interface IRatingSetter {
  handleOnRating: (rating: number) => void;
  error?: boolean;
  value?: number;
  helpertext?: string;
}

const RatingSetter = ({
  handleOnRating,
  error,
  value,
  helpertext,
}: IRatingSetter) => {
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [rate, setRate] = useState<number>(value ?? 0);

  useEffect(() => {
    const initialValue = new Array(COUNT_STAR).fill('outlined');
    for (let i = 0; i < rate; i++) {
      initialValue[i] = 'filled';
    }
    if (value) setRate(value);
    setIsCheck(initialValue);
  }, [value, rate]);

  const handleClickOnStar = (idx: number) => {
    const ratings: string[] = [];
    for (let i = 0; i < COUNT_STAR; i++) {
      if (i <= idx) {
        ratings.push('filled');
      } else {
        ratings.push('outlined');
      }
    }
    setRate(idx + 1);
    handleOnRating(idx + 1);
    setIsCheck(ratings);
  };

  return (
    <S.RatingWrapper>
      <S.Rating>
        {new Array(COUNT_STAR).fill(1).map((star, idx) => (
          <svg
            key={star + Math.random().toString(30)}
            width="25"
            height="25"
            className={isCheck[idx]}
            onClick={() => handleClickOnStar(idx)}
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        ))}
        <S.RatingPoint>{rate}점</S.RatingPoint>
      </S.Rating>
      {error && <ErrorMessage>{helpertext}</ErrorMessage>}
    </S.RatingWrapper>
  );
};

export default RatingSetter;

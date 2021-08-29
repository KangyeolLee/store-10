import React, { useMemo } from 'react';
import * as S from './styles';
import { IRating } from '@/types';
import { nanoid } from 'nanoid';
import { calculateRatio } from '@/utils/helper';

interface IRatingChart {
  ratings: IRating[];
  total: number;
}

const RatingChart = ({ ratings, total }: IRatingChart) => {
  const stars = useMemo(() => sortRating(ratings), [ratings]);

  return (
    <S.RatingChart>
      {stars.map((star) => {
        const { count, rating } = star;
        return (
          <S.ChartBar key={nanoid()} count={calculateRatio({ total, count })}>
            <div className="bar">
              <div className="bar-guage"></div>
            </div>
            <div className="text">{rating}점</div>
            <span className="hover-text">{count}명</span>
          </S.ChartBar>
        );
      })}
    </S.RatingChart>
  );
};

export default React.memo(RatingChart);

const sortRating = (ratings: IRating[]) => {
  return ratings.sort((a, b) => b.rating - a.rating);
};

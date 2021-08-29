import React from 'react';
import * as S from './styles';
import { nanoid } from 'nanoid';

const START_COUNT = 5;

interface IRating {
  rating: number;
  uniqueId: string;
}

const RatingGetter = ({ rating, uniqueId }: IRating) => {
  const count = rating >> 0;
  const pointNumber = +(rating - count).toFixed(1);
  const rest = START_COUNT - Math.ceil(pointNumber) - count;

  // TODO: ㅋㅋ 하드코딩 또 오졌다리
  // 이걸 따로 svg 파일로 관리할 수 있을지 고민중입니다
  // 안되면 유틸함수로 만들어야 할 듯?

  return (
    <S.Rating className="ratings">
      {new Array(count).fill(1).map((_) => (
        <svg key={nanoid()} width="25" height="25">
          <path
            fill="#2ac1bc"
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
          />
        </svg>
      ))}

      {pointNumber !== 0 && (
        <svg width="25" height="25">
          <linearGradient y2="100%" x2="100%" y1="100%" x1="0%" id={uniqueId}>
            <stop
              offset={pointNumber * 100 + '%'}
              stopColor="#2ac1bc"
              id={uniqueId}
            />
            <stop offset="0%" stopColor="#ccc" id={uniqueId} />
          </linearGradient>
          <path
            fill={'url(#' + uniqueId + ')'}
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
          />
        </svg>
      )}

      {new Array(rest).fill(1).map((_) => (
        <svg key={nanoid()} width="25" height="25">
          <path
            fill="#ccc"
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
          />
        </svg>
      ))}
    </S.Rating>
  );
};

export default RatingGetter;

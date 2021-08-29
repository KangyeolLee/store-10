import React from 'react';
import * as S from './styles';

export interface ISpinner {
  width?: number;
  height?: number;
}

const Spinner = ({ width, height }: ISpinner) => {
  return (
    <S.SpinnerContainer
      width={width}
      height={height}
      className="loader"
    ></S.SpinnerContainer>
  );
};

export default Spinner;

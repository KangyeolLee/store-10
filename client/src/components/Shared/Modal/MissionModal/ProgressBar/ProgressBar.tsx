import React from 'react';
import * as S from './styles';

export interface ProgressProps {
  percent: number;
  className?: string;
}

const ProgressBar = ({ className, percent }: ProgressProps) => {
  return (
    <S.ChartBar className={className} percent={percent}>
      <div className="bar">
        <div className="bar-guage"></div>
      </div>
    </S.ChartBar>
  );
};

export default ProgressBar;

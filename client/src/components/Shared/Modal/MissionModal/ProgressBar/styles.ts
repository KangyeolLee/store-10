import styled, { keyframes } from 'styled-components';
import { ProgressProps } from './ProgressBar';

export const ChartBar = styled.div<ProgressProps>`
  position: relative;
  width: 100%;

  .bar {
    position: relative;
    width: 100%;
    height: 1.5rem;
    border-radius: 1rem;
    background-color: #ededed;

    .bar-guage {
      position: absolute;
      bottom: 0;
      height: 100%;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.color.primary};
      animation: ${({ percent }) => moveright(percent)} 1.5s ease-in-out
        forwards;
    }
  }
`;

const moveright = (percent?: number) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${percent ?? 0}%;
  }
`;

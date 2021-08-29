import styled, { keyframes } from 'styled-components';

interface IChartBar {
  count?: number;
}

export const RatingChart = styled.div`
  display: flex;
  gap: 1rem;

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    height: 12rem;
  `}

  .rotated {
    transform: translateY(-50%) rotate(-90deg);
  }
`;

export const ChartBar = styled.div<IChartBar>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .bar {
    position: relative;
    width: 1rem;
    height: 100%;
    border-radius: 1rem;
    background-color: #ededed;

    .bar-guage {
      position: absolute;
      bottom: 0;
      width: 100%;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.color.primary};
      animation: ${({ count }) => moveup(count)} 2s ease-in-out forwards;
    }

    &:hover {
      & ~ .hover-text {
        position: absolute;
        display: flex;
        justify-content: center;
        top: -1rem;
      }
    }
  }

  .hover-text {
    display: none;
    background-color: ${({ theme }) => theme.color.primary};
    padding: 0.5rem;
    ${({ theme }) => theme.fontSize.s};
    width: 2.5rem;
    box-sizing: content-box;
    color: #fff;
    border-radius: 1rem;
    transform: translateY(-100%);
  }

  @keyframes height-progress {
    0% {
      height: 0%;
    }
    100% {
      height: ${({ count }) => (count ? count * 100 : 0)}%;
    }
  }
`;

const moveup = (percent?: number) => keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: ${percent ? 100 * percent : 0}%;
  }
`;

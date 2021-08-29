import styled from 'styled-components';
import { ISpinner } from './Spinner';

export const SpinnerContainer = styled.div<ISpinner>`
  margin: 0;
  &.loader,
  .loader:after {
    border-radius: 50%;
    width: ${({ width }) => (width ? width + 'px' : `10rem`)};
    height: ${({ height }) => (height ? height + 'px' : `10rem`)};
  }

  &.loader {
    font-size: 1rem;
    position: relative;
    border-top: ${({ width }) => (width ? `${width / 5}px` : '1.1rem')} solid
      rgba(200, 200, 200, 0.2);
    border-right: ${({ width }) => (width ? `${width / 5}px` : '1.1rem')} solid
      rgba(200, 200, 200, 0.2);
    border-bottom: ${({ width }) => (width ? `${width / 5}px` : '1.1rem')} solid
      rgba(200, 200, 200, 0.2);
    border-left: ${({ width }) => (width ? `${width / 5}px` : '1.1rem')} solid
      ${({ theme }) => theme.color.primary};
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

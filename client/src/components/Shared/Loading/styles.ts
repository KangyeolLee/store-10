import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(15%);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const LoadingText = styled.span`
  font-family: 'BMDOHYEON', sans-serif;
  ${({ theme }) => theme.fontSize.xl};
  ${({ theme }) => theme.fontWeight.xl};
  animation: ${bounceAnimation} 1s infinite alternate;
`;

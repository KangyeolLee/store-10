import styled from 'styled-components';

export const Error = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  font-family: 'BMDOHYEON', sans-serif;

  .error-text {
    ${({ theme }) => theme.fontSize.xl};
    ${({ theme }) => theme.fontWeight.xl};
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ResponseError = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-family: 'BMDOHYEON', sans-serif;

  .error-text {
    ${({ theme }) => theme.fontSize.xl};
    ${({ theme }) => theme.fontWeight.xl};
  }

  img {
    max-width: 50%;
    max-height: 50%;
  }
`;

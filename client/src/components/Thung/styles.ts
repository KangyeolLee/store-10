import styled from 'styled-components';

export const ThungContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    width: 100%;
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color['text-color']};
`;

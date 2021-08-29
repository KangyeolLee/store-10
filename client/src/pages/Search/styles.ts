import styled from 'styled-components';

export const SearchWrapper = styled.div``;

export const SearchHeader = styled.div`
  font-family: BMDOHYEON;
  ${({ theme }) => theme.fontSize.xl}
  color: ${({ theme }) => theme.color['text-color']};
  margin: 2rem 0;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    ${({ theme }) => theme.fontSize.l}
  }

  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    ${({ theme }) => theme.fontSize.m}
  }
`;

import styled from 'styled-components';

export const Pagination = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const EachPage = styled.div`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
  padding: 1rem;
  color: ${({ theme }) => theme.color['text-color']};
  color: [];

  &.selected {
    background-color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.l};
    color: #ffffff;
  }

  &:hover {
    opacity: 0.75;
  }
`;

import styled from 'styled-components';

export const Terms = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const TextWrapper = styled.pre`
  color: ${({ theme }) => theme.color['text-color']};
  margin-top: 3rem;
  white-space: pre-wrap;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
`;

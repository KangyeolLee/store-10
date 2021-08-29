import styled from 'styled-components';

export const OrderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 1rem;
  ${({ theme }) => theme.fontSize.m}
  @media(max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.s}
  }

  button {
    color: ${({ theme }) => theme.color['text-color']};
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.color.label};
  }

  button.selected {
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.xl};
    border: none;
  }
`;

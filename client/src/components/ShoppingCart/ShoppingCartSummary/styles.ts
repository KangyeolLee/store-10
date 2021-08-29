import styled from 'styled-components';

export const ShoppingCartSummaryWrapper = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  button {
    width: 100%;
    margin-top: 2rem;
    min-height: 5rem;
  }
  position: sticky;
  position: -webkit-sticky;
  top: 8.5rem;
  background-color: ${({ theme }) => theme.color.body};
`;

export const ShoppingCartSummary = styled.dl`
  background-color: ${({ theme }) => theme.color.body};
  border: 1px solid ${({ theme }) => theme.color.body};
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
`;

export const ShoppingCartSummaryRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  color: ${({ theme }) => theme.color['text-color']};
  dt {
    ${({ theme }) => theme.fontSize.m}
    ${({ theme }) => theme.fontWeight.m}
  }
  dd {
    ${({ theme }) => theme.fontSize.m}
    ${({ theme }) => theme.fontWeight.l}
    &.red {
      color: ${({ theme }) => theme.color.error};
    }
  }

  &:last-child {
    margin: 3rem 0;
    dt {
      ${({ theme }) => theme.fontSize.m}
      ${({ theme }) => theme.fontWeight.l}
    }
    dd {
      ${({ theme }) => theme.fontSize.l}
      ${({ theme }) => theme.fontWeight.l}
    }
  }
`;

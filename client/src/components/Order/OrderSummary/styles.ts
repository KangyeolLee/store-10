import styled from 'styled-components';

export const OrderSummaryWrapper = styled.section`
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
`;

export const OrderSummary = styled.dl`
  border: 1px solid ${({ theme }) => theme.color['border-gray']};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color['body']};
  color: ${({ theme }) => theme.color['text-color']};
  padding: 1rem 2rem;
  overflow: hidden;
  h5 {
    padding-bottom: 1rem;
  }
`;

export const OrderSummaryRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
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
      ${({ theme }) => theme.fontWeight.xl}
      color: ${({ theme }) => theme.color.primary}
    }
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color['border-gray']};
`;

export const OrderSummaryFooter = styled.footer`
  padding: 2rem 0;
  line-height: 1.6rem;
`;

export const OrderAgreementWrapper = styled.div`
  margin-top: 1.2rem;
  padding: 0.1rem 1.2rem 1.6rem 1.2rem;
  background-color: ${({ theme }) => theme.color['border-gray']};
`;

export const OrderAgreement = styled.span`
  display: block;
  margin-top: 2rem;
  ${({ theme }) => theme.fontSize.s}
  ${({ theme }) => theme.fontWeight.m}
`;

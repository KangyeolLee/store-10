import styled from 'styled-components';
import { OrderInfoHeader } from '../styles';

export const OrderPaymentHeader = styled(OrderInfoHeader)`
  margin-top: 2.4rem;
`;

export const OrderPaymentWrpper = styled.div`
  display: flex;
  padding: 1.2rem;
  gap: 1rem;
`;

export const Payment = styled.button`
  font-family: BMDOHYEON;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color['body']};
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.xl};
  box-shadow: ${({ theme }) => theme.boxShadow};
  img {
    margin-right: 1.2rem;
  }
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  &.selected {
    border: 3px solid ${({ theme }) => theme.color.primary};
    margin: -3px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    flex-direction: column;
    ${({ theme }) => theme.fontSize.s}
    img {
      margin-right: 0;
      margin-bottom: 2rem;
    }
    padding-bottom: 1.2rem;
  }
`;

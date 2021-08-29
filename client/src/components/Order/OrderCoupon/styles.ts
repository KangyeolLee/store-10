import styled from 'styled-components';
import { OrderInfoHeader } from '../styles';

interface ICouponDisplay {
  hasData: number;
}

export const OrderCoupon = styled.div``;

export const OrderCouponHeader = styled(OrderInfoHeader)`
  margin-top: 2.4rem;
  button {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const RegisterCoupon = styled.div`
  &.collapsed {
    display: none;
  }
  display: flex;
  padding: 1.2rem;
  overflow: hidden;
  padding-bottom: 3rem;
  button {
    flex-grow: 0;
    margin-left: 1.2rem;
    width: 10rem;
  }
`;

export const RegisterCouponWrapper = styled.div`
  background: ${({ theme }) => theme.color['border-gray']};
`;

export const CollapsibleWrapper = styled.div`
  cursor: pointer;
  text-align: right;
  padding: 1.2rem;
  span {
    color: ${({ theme }) => theme.color.label};
    ${({ theme }) => theme.fontWeight.m};
    ${({ theme }) => theme.fontSize.s};
    margin-right: 1.2rem;
  }
  svg {
    fill: ${({ theme }) => theme.color.label};
  }
`;

export const CouponWrapper = styled.div`
  width: 100%;
  margin-top: 2.4rem;
`;

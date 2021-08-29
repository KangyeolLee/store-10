import Thung from '@/components/Thung';
import styled from 'styled-components';

export const ShoppingCartHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.body};
`;

export const ShoppingCartList = styled.ul`
  padding: 1.2rem 0;
`;

export const CartThung = styled(Thung)`
  width: 50%;
  margin: 0 auto;
`;

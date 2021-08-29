import styled from 'styled-components';
import { OrderInfoHeader } from '../styles';

export const OrderProductsHeader = styled(OrderInfoHeader)`
  margin-top: 2.4rem;
  button {
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.l};
    ${({ theme }) => theme.fontSize.m};
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const OrderProductsList = styled.ul`
  margin-top: 2.4rem;
`;

export const OrderProductsItem = styled.li`
  border: 1px solid ${({ theme }) => theme.color['border-gray']};
  box-shadow: ${({ theme }) => theme.boxShadow};
  min-height: 15rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  background: ${({ theme }) => theme.color['body']};
  color: ${({ theme }) => theme.color['text-color']};
  &:not(:first-child) {
    margin-top: 1rem;
  }
  label {
    padding-right: 1rem;
  }
  overflow: hidden;
`;

export const ImgWrapper = styled.div`
  height: 12rem;
  flex: 0 0 12rem;
  border-radius: 0.8rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  padding-left: 1.2rem;
`;

export const ItemInfoName = styled.span`
  ${({ theme }) => theme.fontSize.m};
`;

export const ItemInoPriceWrapper = styled.div`
  margin-top: 10px;
`;

export const ItemInfoPrice = styled.span`
  ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.fontWeight.l}
  margin-top: 10px;

  &.strikethrough {
    text-decoration: line-through;
  }
  &.discount {
    color: ${({ theme }) => theme.color['error']};
    margin-left: 1.2rem;
  }
`;

export const ItemInfoCount = styled.span`
  ${({ theme }) => theme.fontSize.s};
  color: gray;
`;

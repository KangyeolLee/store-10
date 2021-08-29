import styled from 'styled-components';
import { NumberInput } from '@/components/Shared/Input';

export const ShoppingCartItem = styled.li`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.body};
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 15rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.color.body};
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

  :hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
    height: 6rem;
    flex: 0 0 6rem;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.2rem;

  :hover {
    cursor: pointer;
  }
`;

export const TotalPrice = styled.div`
  padding-top: 1.2rem;
  padding-right: 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    color: ${({ theme }) => theme.color['text-color']};
    ${({ theme }) => theme.fontWeight.l};
    ${({ theme }) => theme.fontSize.m};
    @media (max-width: ${({ theme }) => theme.media.phone}px) {
      ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const ItemInfoName = styled.span`
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color['text-color']};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 90%;
  line-height: 2rem;
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
    ${({ theme }) => theme.fontSize.s};
    line-height: 1.6rem;
  }
`;
export const ItemInoPriceWrapper = styled.div`
  margin-top: 0.8rem;
`;
export const ItemInfoPrice = styled.span`
  ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.label};
  &.strikethrough {
    text-decoration: line-through;
  }
  &.discount {
    color: ${({ theme }) => theme.color['error']};
    margin-left: 1.2rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  &:hover {
    opacity: 0.4;
  }
  svg {
    stroke: ${({ theme }) => theme.color['text-color']};
  }
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceNumberInput = styled(NumberInput)`
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
    button {
      width: 1.7rem;
      height: 1.7rem;
      ${({ theme }) => theme.fontSize.s};
    }
    input {
      ${({ theme }) => theme.fontSize.s};
      width: 2rem;
      padding: 0;
    }
  }
`;

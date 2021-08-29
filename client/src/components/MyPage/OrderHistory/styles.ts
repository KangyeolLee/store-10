import styled, { css } from 'styled-components';

interface IOrderStatus {
  isSelected?: boolean;
}

export const Container = css`
  background-color: ${({ theme }) => theme.color['body']};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;
  padding: 3.6rem;
`;

export const OrerHistory = styled.div``;
export const OrderHistoryHeader = styled.header`
  ${Container}
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    padding: 0;
  }
`;

export const OrderPeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem 2rem 2rem;
  /* h5 {
    @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
      width: 100%;
      padding: 1.2rem;
    }
  } */
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    padding: 0;
  }
  span {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
    color: ${({ theme }) => theme.color['text-color']};
    margin-left: 1rem;
    &.selected {
      background-color: ${({ theme }) => theme.color.primary};
      border: 1px solid ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color['off-white']};
    }
    @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
      margin-top: 1.2rem;
    }
    @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
      ${({ theme }) => theme.fontSize.s};
      justify-content: center;
    }
  }
`;

export const OrderStatusContainer = styled.div`
  display: flex;
  padding-bottom: 2.5rem;
  border-radius: 0.8rem;
  justify-content: center;
`;

export const OrderStatusWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    flex: 0 0 5.5rem;
  }
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    flex: 0 0 4.6rem;
  }
`;

export const OrderStatusName = styled.span`
  display: block;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color['text-color']};
  padding: 0.8rem;
  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    margin-top: 1.2rem;
  }
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.xs};
    padding: 0.4rem 0;
  }
`;

export const OrderStatus = styled.div<IOrderStatus>`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  ${(props) =>
    props.isSelected
      ? css`
          background-color: ${({ theme }) => theme.color.primary};
          color: ${({ theme }) => theme.color['off-white']};
        `
      : css`
          background-color: ${({ theme }) => theme.color.label};
          color: ${({ theme }) => theme.color['reverse-text-color']};
        `}
  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    width: auto;
    height: auto;
    border-radius: 0;
    background: transparent;
    ${(props) =>
      props.isSelected
        ? css`
            color: ${({ theme }) => theme.color.primary};
          `
        : css`
            color: ${({ theme }) => theme.color['label']};
          `}
  }
`;

export const OrderHistoryBody = styled.div`
  ${Container}
  margin: 2rem auto 3rem auto;
  width: 100%;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    padding: 0;
  }
`;

import styled from 'styled-components';

export const OrderContainer = styled.section`
  background-color: ${({ theme }) => theme.color['body']};
  display: flex;
  gap: 2rem;
  border-radius: 1.2rem;
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab}px) {
    flex-direction: column;
  }
  > div {
    flex: 1;
  }
`;

export const OrderAside = styled.aside`
  position: relative;
  flex: 0 1 38.5rem;
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab - 1}px) {
    display: none;
  }
`;

export const OrderFooter = styled.footer`
  @media (min-width: ${({ theme }) => theme.media.btw_pc_tab - 1}px) {
    display: none;
  }
`;

export const Order = styled.div`
  flex: 1;
`;

export const OrderHeader = styled.header``;

import styled from 'styled-components';

export const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 3rem;

    ${({ theme }) => theme.mediaScreen.phone`
      font-size: 2.75rem;
    `}
  }
  .cart-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    ${({ theme }) => theme.mediaScreen.btw_pc_tab`
      flex-direction: column;  
    `}
  }
`;

export const ShoppingCartAside = styled.aside`
  position: relative;
  flex: 0 1 38.5rem;
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab}px) {
    display: none;
  }
`;

export const ShoppingCartFooter = styled.footer`
  padding: 0 0 2rem 0;
  div {
    margin-top: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.btw_pc_tab}px) {
    display: none;
  }
`;

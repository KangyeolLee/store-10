import styled from 'styled-components';

interface LenseProps {
  imgset: string;
  show: boolean;
}

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  color: ${({ theme }) => theme.color['text-color']};
  margin-bottom: 5rem;

  ${({ theme }) =>
    theme.mediaScreen.tablet`
      flex-direction: column;
    `}
`;

export const ProductThumbnailArea = styled.div`
  display: flex;
  width: 40%;
  gap: 2rem;
  flex-direction: column;
  position: relative;

  ${({ theme }) =>
    theme.mediaScreen.btw_pc_tab`
      width: 50%;
    `}

  ${({ theme }) =>
    theme.mediaScreen.tablet`
      width: 100%;
    `}
`;

export const ProductThumbnail = styled.img`
  width: 100%;
  flex: 1;
  object-fit: cover;
`;

export const ProductPreviewArea = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ProductPreviewThumbnail = styled.img`
  width: 33%;
  max-width: 7rem;
  object-fit: cover;
  cursor: pointer;

  &:not(.selected) {
    opacity: 0.2;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ProductLenseSelector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  height: 10rem;
  border: 1px solid #aaa;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const ProductThumbnailLense = styled.div<LenseProps>`
  top: 0;
  position: absolute;
  border: 1px solid #aaa;
  background-repeat: no-repeat;
  background-color: #fff;
  background-size: inherit;
  background-image: url(${({ imgset }) => imgset});
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const ProductOrder = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  ${({ theme }) =>
    theme.mediaScreen.btw_pc_tab`
      width: 50%;
    `}

  ${({ theme }) =>
    theme.mediaScreen.tablet`
      width: 100%;
    `}
`;

export const ProductDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductDetail = styled.div`
  display: flex;
  gap: 2rem;

  .price {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};

    &.original {
      text-decoration: line-through;
    }

    &.discount {
      padding: 0 1rem;
      border-radius: 1rem;
      line-height: 1.8rem;
      color: #fff;
      background-color: ${({ theme }) => theme.color.error};
      ${({ theme }) => theme.fontWeight.l};
    }
  }

  .detail-content {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
  }
`;

export const OrderBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.background};

  .product-name {
    flex: 1;
    line-height: 2.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.s};
  }

  .small-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }

  .price {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export const PriceBar = styled.div`
  display: flex;
  justify-content: space-between;

  .price-tag {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
  }
  .price-sum {
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontSize.xxl};
    ${({ theme }) => theme.fontWeight.xl};
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  z-index: 10;

  button {
    padding: 1.5rem 3rem;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color['text-color']};

    &.purchase {
      ${({ theme }) => theme.fontSize.l}
      ${({ theme }) => theme.fontWeight.xl}
    }

    svg {
      stroke: ${({ theme }) => theme.color['text-color']};
      color: ${({ theme }) => theme.color['text-color']};

      &.checked {
        stroke: ${({ theme }) => theme.color.error};
        fill: ${({ theme }) => theme.color.error};
      }
    }

    &.cart svg {
      fill: ${({ theme }) => theme.color['text-color']};
    }

    &:hover {
      opacity: 0.75;
    }

    ${({ theme }) =>
      theme.mediaScreen.btw_pc_tab`
        padding: 1.5rem 2.5rem;  
        font-size: 1.8rem;
    `}
  }
`;

export const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};

  &.pagination-scroll-top {
    padding-top: 10.8rem;
    margin-top: -10.8rem;
  }

  .title {
    ${({ theme }) => theme.fontWeight.l};
    margin: 3rem 0;
  }

  ul {
    li.notice-item {
      margin-top: 1rem;
      line-height: 2.2rem;
      list-style-type: disc;
      list-style-position: inside;
      text-indent: -2.3rem;
      padding: 1rem 1rem 1rem 4.5rem;
      background-color: ${({ theme }) => theme.color.background};
      border-radius: 2rem;
    }
  }

  table.custom-table {
    margin-bottom: 2rem;

    tr {
      border-bottom: 1px solid ${({ theme }) => theme.color.line};

      th {
        ${({ theme }) => theme.fontWeight.l};
        text-align: left;
        padding: 1.5rem 0;
        min-width: 7rem;

        &.mobile-only {
          ${({ theme }) => theme.mediaScreen.phone`
            display: flex;
            flex-direction: column;
          `}
        }
      }

      td {
        padding: 1.5rem 0;
      }
    }
  }

  .thung-review {
    max-width: 50%;
    margin: auto;
  }
`;

export const ProductTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const ProductTableRow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};

  .table-title {
    ${({ theme }) => theme.fontWeight.m};
    ${({ theme }) => theme.fontWeight.l};
  }
`;

export const ProductImageDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  height: 100rem;
  margin-bottom: 5rem;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 10%;
    bottom: -2.5rem;
    left: 0;
    filter: blur(5rem);
    background-color: #ededed;
  }

  &.open {
    height: auto;

    &::after {
      content: none;
    }
  }
`;

export const LoadMoreImageButton = styled.button`
  padding: 2rem 4rem;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: ${({ theme }) => theme.color.primary};
  color: #ffffff;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.l};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary2};
  }

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    padding: 1.5rem 2rem;
    font-size: 1.7rem;
    border-radius: 1.5rem;
  `}
`;

export const AlertArea = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.error};
  border-radius: 1rem;
  padding: 2rem;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  gap: 3rem;

  .alert-message-wrapper {
    margin-left: 8rem;

    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      margin-left: 4.5rem;
    `}
  }
`;

export const AlertIcon = styled.p`
  position: absolute;
  top: 2rem;

  svg {
    width: 5rem;
    height: 5rem;
    fill: #fff;

    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      width: 3rem;
      height: 3rem;
    `}
  }
`;

export const AlertMessage = styled.p`
  ${({ theme }) => theme.fontWeight.l};
  color: #fff;
  & + & {
    margin-top: 1rem;
  }
`;

export const AlertSmallMessage = styled.p`
  ${({ theme }) => theme.fontWeight.s};
  line-height: 1.8rem;
  color: #fff;
  margin-top: 1rem;
`;

export const RatingArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow};

  .totalRates {
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontSize.xxl};
    ${({ theme }) => theme.fontWeight.xl};
  }

  .ratings {
    svg {
      width: 5rem;
      height: 5rem;
      transform: translate(50%, 50%) scale(2);
    }
  }

  ${({ theme }) => theme.mediaScreen.tablet`
    padding: 3.5rem;
  `}

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const StarRates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    border-bottom: 1px solid #aaa;
    padding-bottom: 3rem;
  `}
`;

export const UserReviewArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  .username {
    ${({ theme }) => theme.fontWeight.l};
  }
`;

export const UserReview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: 1;
  border-top: 1px solid ${({ theme }) => theme.color['border-gray']};
  border-bottom: 1px solid ${({ theme }) => theme.color['border-gray']};

  & + & {
    margin-top: 3rem;
  }

  ${({ theme }) => theme.mediaScreen.mphone`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const UserReviewTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .rating-area {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .date {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.s};
  }
`;

export const ReviewImages = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  margin: 2rem 0;

  img {
    width: 20rem;
    height: 15rem;
    border-radius: 2rem;
    object-fit: cover;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }

    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      width: 15rem;
      height: 10rem;
    `}
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UserDescription = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.body2};
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1.4rem;
  }
`;

export const PreparingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  img {
    max-width: 50%;
    max-height: 50%;
  }
`;

export const PreparingText = styled.p`
  font-family: 'BMDOHYEON';
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.l};

  ${({ theme }) => theme.mediaScreen.mphone`
    font-size: 1.7rem;
  `};
`;

export const NoDataText = styled(PreparingText)`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaScreen.phone`
    font-size: 1.75rem;
  `}
`;

export const LoadingWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

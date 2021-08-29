import {
  ReviewImages,
  UserReview,
  UserReviewArea,
} from '@/components/ProductDetails/styles';
import styled from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => theme.fontSize.m};
`;

export const MyReviews = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};

  &.pagination-scroll-top {
    ${({ theme }) => theme.mediaScreen.btw_pc_tab`
      padding-top: 23rem;
      margin-top: -23rem;
    `};

    ${({ theme }) => theme.mediaScreen.tablet`
      padding-top: 21rem;
      margin-top: -21rem;
    `};
  }

  ${UserReviewArea} {
    margin-top: 3rem;
  }
`;

export const MyReviewsItem = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  & + & {
    margin-top: 3rem;
  }

  .review-wrapper {
    display: flex;
    gap: 2rem;

    ${({ theme }) => theme.mediaScreen.mphone`
      flex-direction: column;
    `}
  }

  ${ReviewImages} {
    img {
      width: 100%;
      max-width: 15rem;
      max-height: 10rem;
    }
  }

  ${UserReview} {
    overflow-x: auto;

    ${({ theme }) => theme.mediaScreen.mphone`
      border-top: none;
      padding-left: 0;
      padding-right: 0;
    `}
  }
`;

export const ThumbnailArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => theme.mediaScreen.mphone`
    flex-direction: row;
  `}
`;

export const ProductThumbnail = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 3rem;
`;

export const LinkButton = styled.button`
  padding: 1rem;
  min-width: 10rem;
  width: 100%;
  color: #fff;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.primary};

  &:hover {
    opacity: 0.75;
  }
`;

export const ReviewTitleArea = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.55;
    }
  }
`;

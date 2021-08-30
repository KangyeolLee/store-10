import styled from 'styled-components';
import Checkbox from '../Shared/Checkbox';
import { BG_COLOR } from './Card';

interface LinerProps {
  bgColor: BG_COLOR;
}

export const CardWrapper = styled.div`
  height: 100%;
  transition: transform 0.12s ease-in;

  /* Elevation1 */

  box-shadow: ${({ theme }) => theme.boxShadow};

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const Card = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};
  background: ${({ theme }) => theme.color['background']};
  overflow: hidden;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

export const Liner = styled.div<LinerProps>`
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
  height: 0.5rem;
`;

export const CardCheckbox = styled(Checkbox)`
  position: absolute;
  z-index: 200;
  margin: 1rem;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.6rem;
  svg {
    stroke: ${({ theme }) => theme.color['text-color']};
  }
`;

export const NameTag = styled.div`
  position: absolute;
  user-select: none;
  z-index: 50;
  top: 1rem;
  right: 1rem;
  padding: 0.6rem;
  border-radius: 0.6rem;
  box-sizing: border-box;
  color: #fff;
  ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.color.error};

  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    ${({ theme }) => theme.fontSize.s}
  }
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.xs}
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.s};

  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.25s ease-in;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
      transform: scale(1.012);
    }
  }
`;

export const ProductTitle = styled.p`
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  ${({ theme }) => theme.fontWeight.s};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 0.8rem;
`;

export const ButtonArea = styled.div`
  svg {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    stroke: ${({ theme }) => theme.color['text-color']};
    width: 1.5em !important;
    height: 1.5em !important;

    &.cart {
      fill: ${({ theme }) => theme.color['text-color']};
    }

    &.heart.checked {
      fill: ${({ theme }) => theme.color.error};
      stroke: ${({ theme }) => theme.color.error};
      transform: scale(1.07);
    }
  }
  &:hover {
    opacity: 0.75;
  }
`;

export const ProductDetails = styled.div`
  cursor: pointer;
  position: relative;
  ${({ theme }) => theme.fontSize.m};

  .price-tag {
    ${({ theme }) => theme.fontWeight.l};
    font-size: clamp(10px, 2.6vw, 1em);
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0.8rem 0.8rem 0.8rem;

    &.strikethrough {
      margin: 0.5rem 0.8rem 0 0.8rem;
      font-size: clamp(10px, 2.3vw, 0.9em);
      text-decoration: line-through;
      color: ${({ theme }) => theme.color['text-color']}55;
    }
    &.discount {
      color: ${({ theme }) => theme.color['error']};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    .price-tag {
      ${({ theme }) => theme.fontSize.s};
    }
    &.strikethrough {
      ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

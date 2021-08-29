import styled from 'styled-components';

export const PromotionWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    grid-template-columns: 1fr;
  }
`;

export const PromotionCard = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  border-radius: 1rem;
  cursor: pointer;
  margin: 1rem 0;
  overflow: hidden;

  img {
    transition: transform 0.3s;
    position: absolute;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const PromotionText = styled.div`
  height: 25rem;
  margin-right: clamp(2rem, 5vw, 6rem);
  position: relative;
  pointer-events: none;
  display: grid;
  font-size: clamp(10px, 3vw, 2.5rem);
  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    font-size: clamp(10px, 4vw, 3rem);
    height: 10em;
    width: 9em;
  }
`;
export const PromotionTitle = styled.div`
  font-size: 1em;
  font-family: BMDOHYEON;
  align-self: end;
  pointer-events: none;
`;
export const PromotionContent = styled.div`
  font-size: 0.8em;
  pointer-events: none;
`;

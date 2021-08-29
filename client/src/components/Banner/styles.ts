import styled from 'styled-components';

export const Carousel = styled.div`
  ul.control-dots {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 35rem;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

interface IIndicator {
  isSelected: boolean;
}

export const Indicator = styled.div<IIndicator>`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary : '#fff'};

  &:hover {
    opacity: 0.85;
  }
`;

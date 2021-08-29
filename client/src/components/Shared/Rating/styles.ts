import styled from 'styled-components';

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  svg.outlined {
    path {
      fill: #ccc;
    }
  }

  svg.filled {
    path {
      fill: #2ac1bc;
    }
  }
`;

export const RatingPoint = styled.span`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #ffffff;
  margin-left: 4rem;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

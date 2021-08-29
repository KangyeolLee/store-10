import styled from 'styled-components';

export const CategorySelector = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Category = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  cursor: pointer;
  opacity: 0.35;

  &#category-gift {
    background-color: #a39dff;
  }

  &#category-package {
    background-color: #e6d267;
  }

  &#category-exchange {
    background-color: #b9d58c;
  }

  &:hover {
    opacity: 0.85;
  }

  &.selected {
    color: #fff;
    opacity: 1;
    background-color: ${({ theme }) => theme.color.primary};

    svg {
      stroke: #fff;
      fill: #fff;

      ${({ theme }) => theme.mediaScreen.tablet`
        width: 4rem;
        height: 4rem;
      `}
    }
  }

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    padding: 1rem;
    gap: 1rem;  
  `}
`;

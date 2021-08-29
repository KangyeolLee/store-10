import styled from 'styled-components';

export const Footer = styled.div`
  position: relative;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.color.footer};
  padding: 4rem 0;
  margin-top: auto;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.color.body3};

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transform: scale(1.2) translateY(20%);
    border-radius: 95% 95% 0 0 / 95%;
    top: 0;
    left: 0;
    background-image: linear-gradient(105deg, #111 10%, #fff 70%);
    opacity: 0.1;
  }

  .container {
    margin: 0 auto;
  }
`;

export const FooterTab = styled.div`
  padding-bottom: 2rem;
  z-index: 100;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.color.line};
    padding-left: 2rem;
  }
`;

export const FooterTabs = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  ${({ theme }) => theme.fontSize.s};

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
    > ${FooterTab} {
      grid-column: 1 / span 3;
      padding: 0;
      padding-left: 0;
      border: none;

      &:last-child {
        margin-bottom: 3rem;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const TabTitle = styled.div`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontSize.m}
`;

export const TabContent = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontWeight.s}

  a {
    display: block;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }

  a + a {
    margin-top: 0.5rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      fill: ${({ theme }) => theme.color['text-color']};
    }
  }

  p + p {
    margin-top: 0.5rem;
  }
`;

export const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.line};
  padding: 2rem 0;
  p {
    color: ${({ theme }) => theme.color['text-color']};
    &:nth-child(2) {
      min-width: 305px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab}px) {
    ${({ theme }) => theme.fontSize.s};
    gap: 1rem;
    display: flex;
    justify-content: center;
    p {
      &:nth-child(2) {
        min-width: auto;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
    ${({ theme }) => theme.fontSize.s};
    gap: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    p {
      &:nth-child(2) {
        min-width: auto;
      }
    }
  }
`;

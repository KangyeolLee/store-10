import styled from 'styled-components';

export const MyPageAside = styled.aside`
  font-family: BMDOHYEON;
  z-index: 100;

  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    position: sticky;
    top: 9rem;
  `}
`;

export const AsideNav = styled.div`
  position: sticky;
  top: 9rem;
  color: ${({ theme }) => theme.color['text-color']};
  background: ${({ theme }) => theme.color.background};
  border-radius: 1rem;
  width: 23rem;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  footer {
    display: flex;
    flex-direction: column;
    button {
      color: ${({ theme }) => theme.color['label']};
      border-radius: 1.2rem;
      padding: 1rem;
      margin: 0.5rem 0;
      background-color: ${({ theme }) => theme.color.body2};
      &:hover {
        color: ${({ theme }) => theme.color['text-color']};
      }

      ${({ theme }) => theme.mediaScreen.btw_tab_mob`
        margin: 0;
      `}

      .only_mobile {
        display: none;
        fill: ${({ theme }) => theme.color['text-color']};

        ${({ theme }) => theme.mediaScreen.mphone`
          display: block;
        `}
      }

      span {
        ${({ theme }) => theme.mediaScreen.mphone`
          display: none;
        `}
      }
    }

    ${({ theme }) => theme.mediaScreen.btw_pc_tab`
      flex-direction: row;
      gap: 1.5rem;
    `}
  }

  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    display: flex; 
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
  `}
`;

export const MyPageNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  padding-bottom: 1rem;

  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    flex-direction: row;
    justify-content: space-between;
    border-bottom: none; 
    padding: 0;
    margin-bottom: 1rem;
  `}
`;

export const MyPageUserInfo = styled.section`
  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    display: flex;
    align-items: center;
    gap: 2rem;
  `}
`;

export const MyPageGreeting = styled.h1`
  ${({ theme }) => theme.fontSize.xl};
  ${({ theme }) => theme.fontWeight.l};
`;

export const MyPageUserName = styled.h1`
  padding: 1.6rem 0;
  font-family: 'Noto Sans', sans-serif;
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.m};
  text-align: left;

  span {
    ${({ theme }) => theme.fontWeight.s};
    ${({ theme }) => theme.fontSize.m};
  }

  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    padding: 1rem 0;
  `}
`;

export const MyPageNav = styled.nav`
  flex: 1;

  ul {
    width: 100%;
    li {
      display: flex;
      align-items: center;
      line-height: 0.1rem;
      gap: 1.5rem;
      ${({ theme }) => theme.fontSize.m};
      ${({ theme }) => theme.fontWeight.m};

      &.selected {
        color: ${({ theme }) => theme.color['text-color']};
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.body3};

        svg {
          fill: ${({ theme }) => theme.color['text-color']};
        }
      }

      width: 100%;
      color: ${({ theme }) => theme.color.label};
      padding: 1rem;
      margin: 1rem 0;
      cursor: pointer;

      svg {
        fill: ${({ theme }) => theme.color.label};
      }

      ${({ theme }) => theme.mediaScreen.btw_pc_tab`
        margin: 0;
      `}

      ${({ theme }) => theme.mediaScreen.btw_tab_mob`
        font-size: 1.4rem;
        padding: 0.5rem;
        gap: 1rem;
      `}

      ${({ theme }) => theme.mediaScreen.mphone`
        justify-content: center;
      `}
    }

    border-bottom: 1px solid ${({ theme }) => theme.color.line};
    margin: 1rem 0;

    ${({ theme }) => theme.mediaScreen.btw_pc_tab`
      display: flex; 
      border-bottom: none;
      margin: 0;
      gap: 0.5rem;
    `}
  }
`;

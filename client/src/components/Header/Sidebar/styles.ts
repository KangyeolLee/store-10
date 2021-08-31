import styled from 'styled-components';

export const SideBar = styled.div`
  position: fixed;
  z-index: 502;
  max-width: 300px;
  height: 100vh;
  width: 100%;
  ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.color['background']};
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;

  &.active {
    transform: translateX(0);
    + .backdorp {
      display: block;
    }
  }

  svg {
    width: 2em;
    height: 2em;
    stroke-width: 1.5px;
    cursor: pointer;
    stroke: ${({ theme }) => theme.color['text-color']};
    &.filled {
      fill: ${({ theme }) => theme.color['text-color']};
    }
  }
`;
export const Top = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  display: flex;
  height: 51px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color['line']};
  padding: 1.2rem 1rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    color: ${({ theme }) => theme.color['text-color']};
  }
`;

export const Contents = styled.div``;

export const ContentTitle = styled.div`
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.xl};
  color: ${({ theme }) => theme.color['text-color']};
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
`;

export const Categories = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  max-height: 90vh;
  padding-bottom: 4rem;

  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color['text-color']};
  li {
    list-style: none;
    cursor: pointer;
    padding: 1rem;
    transition: background 0.2s ease-in;
    ${({ theme }) => theme.fontWeight.l};
    &:hover {
      background: ${({ theme }) => theme.color['primary2']}66;
      color: ${({ theme }) => theme.color['primary3']};
      > dl {
        color: ${({ theme }) => theme.color['text-color']};
        visibility: visible;
        transition-delay: 0.2s;
      }
      @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
        background: transparent;
        > dl {
          max-height: 100vh;
          margin-top: 1rem;
          transition-delay: 0;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SubCategory = styled.dl`
  position: absolute;
  background: ${({ theme }) => theme.color['background']};
  height: 100vh;
  right: 0;
  top: 0;
  margin: 0;
  padding-top: 3rem;
  overflow: hidden;
  border-left: 1px solid ${({ theme }) => theme.color['line']};
  transform: translateX(100%);
  visibility: hidden;
  transition: visibility 0.5s ease-in-out;

  &.none {
    display: none;
  }

  dd {
    min-width: 170px;
    padding: 1rem;

    &:hover {
      background: ${({ theme }) => theme.color['primary2']}66;
      color: ${({ theme }) => theme.color['primary3']};
    }
  }

  //모바일 변경
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
    position: initial;
    transform: none;
    padding-top: 0;
    max-height: 0;
    height: auto;
    white-space: nowrap;
    transition: all 0.5s ease-in-out;
    border-left: none;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border-top: 1px solid;
    border-bottom: 1px solid;

    dd {
      padding: none;
      width: 100%;
    }
  }
`;

export const Backdrop = styled.div`
  background: ${({ theme }) => theme.color['label']}33;
  display: none;
  position: fixed;
  z-index: 501;
  width: 100vw;
  height: 100vh;
`;

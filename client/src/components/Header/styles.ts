import { HEADER_HEIGHT } from '@/styles/globalStyle';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color['background']};
  position: sticky;
  z-index: 500;

  box-shadow: ${({ theme }) => theme.headerBoxShadow};
  top: 0;
  ${({ theme }) => theme.fontSize.m}

  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    ${({ theme }) => theme.fontSize.s}
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

export const Header = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 14rem;
  background: ${({ theme }) => theme.color['background']};
  align-items: center;
  height: ${HEADER_HEIGHT}rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaScreen.mphone`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  display: flex;
  position: relative;
  width: fit-content;
  box-shadow: 0 0 3px ${({ theme }) => theme.color['text-color']}99;
  border-radius: 100%;
  padding: 6px;
  cursor: pointer;
  background-color: transparent;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  justify-self: center;
  margin-left: 2rem;

  img {
    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
      width: 130px;
    }
    @media (max-width: ${({ theme }) => theme.media.phone}px) {
      width: 100px;
    }
  }
`;

export const StateUl = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  align-items: center;

  a {
    text-decoration: none;
    svg {
      margin: 0 0.5rem;
    }
  }

  .search-icon {
    margin: 0 0.5rem;
    display: none;

    @media (max-width: 549px) {
      display: block;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-self: center;
  margin: 0 auto;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;
  max-width: 40rem;
  width: 85%;
  min-width: 50px;

  svg {
    margin: 0 0.5rem 0.3rem 0;
  }
  @media (max-width: 549px) {
    width: 100%;

    svg {
      display: none;
    }
  }
`;

export const SearchText = styled.div`
  border-radius: 0.4em;
  border: 1px solid ${({ theme }) => theme.color['line']};
  color: ${({ theme }) => theme.color['placeholder']};
  position: absolute;
  width: 100%;
  display: flex;
  transform: translateY(-4px);
  align-items: center;
  justify-content: space-between;
  padding: 0.2em 0.6em 0.3em 0.8em;
  height: 4.5rem;
  &:before {
    content: '검색어를 입력해주세요.';
  }

  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    height: 3.5rem;
    &:before {
      content: '검색';
    }
  }
  @media (max-width: ${({ theme }) => theme.media.headerSearch - 1}px) {
    display: none;
  }
`;

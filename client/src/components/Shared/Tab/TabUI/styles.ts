import { HEADER_HEIGHT } from '@/styles/globalStyle';
import styled from 'styled-components';

interface TabTitleAreaProps {
  sticky?: boolean;
}

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavWrapper = styled.nav<TabTitleAreaProps>`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background};
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  z-index: 50;
  top: ${HEADER_HEIGHT}rem; // 헤더 높이만큼 되어야 합니다 (추후 헤더 디자인 수정시 반영되어야 함)
`;

export const TabTitleArea = styled.div`
  padding: auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color['text-color']};

  &.container {
    margin: auto;
  }
`;

export const TabTitle = styled.span`
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
  width: 100%;
  padding: 1.5rem;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  text-align: center;

  &.active {
    border-top: 0.3rem solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.l};
    background-color: ${({ theme }) => theme.color.body};
  }

  ${({ theme }) =>
    theme.mediaScreen.phone`
      font-size :1.4rem;
      padding: 1.5rem 1rem;
    `}
`;

export const TabPanel = styled.div`
  width: 100%;
  ${({ theme }) => theme.fontSize.m}
  ${({ theme }) => theme.fontWeight.s}

  &.pagination-scroll-top {
    margin-top: -13rem;
    padding-top: 13rem;
  }
`;

import { Input } from '@/components/Shared/Input';
import styled from 'styled-components';

export const SearchContents = styled.div`
  z-index: 502;
  width: 100%;
  max-width: ${({ theme }) => theme.media.pc}px;
  left: 50%;
  bottom: 0%;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  height: fit-content;
  min-height: 70%;
  overflow: hidden;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.color['background']};
  position: fixed;
`;

export const SearchWrapper = styled.div`
  @keyframes showSearchWrap {
    0% {
      transform: translate(-50%, 100%);
    }
    100% {
      transform: translate(-50%, 0%);
    }
  }
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 100vh;
  z-index: 503;
  display: block;

  ${SearchContents} {
    animation: showSearchWrap 0.3s ease-in-out forwards;
  }

  border-bottom: 1px solid ${({ theme }) => theme.color['line']};
  ${({ theme }) => theme.fontSize.m}

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
export const SearchBackDrop = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 501;
  background: ${({ theme }) => theme.color['label']}55;
`;

export const SearchInputWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const SearchInput = styled(Input)``;

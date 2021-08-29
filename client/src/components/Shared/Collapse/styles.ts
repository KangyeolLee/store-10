import styled from 'styled-components';

interface ICollapse {
  length: number;
  gaps?: string;
}

interface ICollapsePanel {
  height: number;
}

export const Collapse = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.4em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  user-select: none;
`;

export const CollapseHeader = styled.div<ICollapse>`
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ length, gaps }) =>
    gaps ? gaps : `repeat(${length}, 1fr)`};

  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
  color: #fff;
  padding: 2rem;

  &.review_collapse {
    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      grid-template-columns: 1fr 1fr 3fr 1fr;
    `}
  }
  &.notice_collapse {
    @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
      grid-template-columns: 3.1rem 3fr 9rem;
      p:last-child {
        display: none;
      }
    }
  }

  .answer {
    ${({ theme }) => theme.mediaScreen.tablet`
      text-align: center;
    `}
  }
`;

export const CollapseBody = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
`;

export const CollaspeRow = styled.div<ICollapse>`
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ length, gaps }) =>
    gaps ? gaps : `repeat(${length}, 1fr)`};
  padding: 2rem;
  color: ${({ theme }) => theme.color['text-color']};
  cursor: pointer;
  overflow: hidden;

  &.lock::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lock};
    opacity: 0.95;
  }

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    opacity: 0.85;
  }

  &.active {
    background-color: ${({ theme }) => theme.color.background};
  }

  &.review_collapse {
    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      grid-template-columns: 1fr 1fr 3fr 1fr;
    `}
  }
  &.notice_collapse {
    @media (max-width: ${({ theme }) => theme.media.btw_tab_mob}px) {
      grid-template-columns: 3.1rem 3fr 9rem;
      div:last-child {
        display: none;
      }
    }
  }
`;

export const CollapseSubTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 2.2rem;

  .category {
    display: flex;

    p {
      border-radius: 1rem;
      color: #fff;
      ${({ theme }) => theme.fontWeight.l};
      padding: 0.2rem 0.7rem;

      &.상품 {
        background-color: #a39dff;
      }
      &.환불 {
        background-color: #b9d58c;
      }
      &.택배 {
        background-color: #e6d267;
      }
    }
  }
`;

export const CollapsePanel = styled.div<ICollapsePanel>`
  display: flex;
  height: 0;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  overflow: hidden;
  transition: height 0.25s ease-in-out;
  border-top: 1px solid ${({ theme }) => theme.color.line};

  &:last-child {
    border: none !important;
  }

  &.active {
    height: ${({ height }) => height ?? 0}px;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
    border-top: 1px dashed ${({ theme }) => theme.color.line} !important;
  }
`;

export const CollapseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const CollapseDetails = styled.div`
  display: flex;
  align-items: flex-start;
  line-height: 2rem;
  gap: 2rem;
  color: ${({ theme }) => theme.color['text-color']};

  svg {
    stroke: ${({ theme }) => theme.color['text-color']};
  }

  p {
    flex: 1;

    &.question {
      ${({ theme }) => theme.fontWeight.l};
    }
    &.answer {
      background-color: ${({ theme }) => theme.color.body3};
      padding: 2rem;
      border-radius: 1.5rem;
    }

    span {
      ${({ theme }) => theme.fontWeight.xl};
      ${({ theme }) => theme.fontSize.xl};
    }
  }

  pre {
    white-space: pre-wrap;
  }

  & + & {
    margin-top: 2rem;
  }
`;

export const Status = styled.div`
  display: flex;
  height: 100%;
  gap: 0.5rem;
  align-items: center;

  ${({ theme }) => theme.mediaScreen.tablet`
    justify-content: center;
  `}
`;

export const StatusPoint = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;

  &.pending {
    background-color: ${({ theme }) => theme.color.placeholder};
  }

  &.completed {
    background-color: ${({ theme }) => theme.color.primary3};
  }
`;

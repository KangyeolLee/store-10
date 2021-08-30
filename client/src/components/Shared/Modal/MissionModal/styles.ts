import styled from 'styled-components';
import ModalLayout from '../ModalLayout';
import { ModalWrapper } from '../ModalLayout/styles';

export const MissionLayout = styled(ModalLayout)`
  text-align: center;

  .title {
    ${({ theme }) => theme.mediaScreen.btw_pc_tab`
      font-size: 3.5rem;
    `}
    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      font-size: 3rem;
    `}
    ${({ theme }) => theme.mediaScreen.phone`
      font-size: 2.5rem;
    `}
  }

  ${ModalWrapper} {
    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      padding: 2rem;
    `};
    ${({ theme }) => theme.mediaScreen.mphone`
      padding: 1.5rem;
    `};
  }
`;

export const MissionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  &.light-mode {
    color: #dfdfdf;
    svg {
      stroke: #dfdfdf;
      &.fill {
        fill: #dfdfdf;
      }
    }
  }
  &.dark-mode {
    color: #7b7b7b;
    svg {
      stroke: #7b7b7b;

      &.fill {
        fill: #7b7b7b;
      }
    }
  }

  ${({ theme }) => theme.mediaScreen.tablet`
     grid-template-columns: repeat(1, 1fr);
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color['text-color']};

  ${({ theme }) => theme.mediaScreen.mphone`
    font-size: 1.7rem;
  `};
`;

export const Mission = styled.li`
  margin-bottom: 1rem;
  ${({ theme }) => theme.fontSize.m}
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 10rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.body2};

  svg {
    width: 2em;
    height: 2em;
    stroke-width: 1.5px;

    &.resize {
      height: 25px;
    }
  }

  &.complete {
    color: ${({ theme }) => theme.color.primary};
    svg {
      stroke: ${({ theme }) => theme.color.primary};

      &.fill {
        fill: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

export const MissionStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  ${({ theme }) => theme.fontSize.l}
  color: ${({ theme }) => theme.color['text-color']};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 3rem;
  text-align: left;

  .current-status {
    width: 50%;

    ${({ theme }) => theme.mediaScreen.tablet`
      width: 100%;
    `}
  }

  .percent-guage {
    width: 50%;

    ${({ theme }) => theme.mediaScreen.tablet`
      width: 100%;
    `}
  }

  .recent-status {
    margin-top: 1rem;
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};

    &.light-mode {
      color: #afafaf;
    }
    &.dark-mode {
      color: #7b7b7b;
    }
  }

  ${({ theme }) => theme.mediaScreen.tablet`
    flex-direction: column;  
  `}

  span {
    width: 50%;
    ${({ theme }) => theme.mediaScreen.tablet`
      width: 100%;
    `}
  }
`;

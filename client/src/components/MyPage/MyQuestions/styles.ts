import styled from 'styled-components';

export const MyQuestions = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};

  h5 {
    margin-bottom: 3rem;
  }

  &.pagination-scroll-top {
    ${({ theme }) => theme.mediaScreen.btw_pc_tab`
      padding-top: 23rem;
      margin-top: -23rem;
    `};

    ${({ theme }) => theme.mediaScreen.tablet`
      padding-top: 21rem;
      margin-top: -21rem;
    `};
  }
`;

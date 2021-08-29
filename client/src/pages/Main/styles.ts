import styled from 'styled-components';

export const Main = styled.div`
  h1.product-title {
    font-family: 'BMDOHYEON';
    color: ${({ theme }) => theme.color['text-color']};
    ${({ theme }) => theme.fontSize.l};
    margin: 3rem 0 1rem;
    line-height: 1.2rem;
    display: inline-block;
    margin-bottom: 2rem;

    &.new {
      background-color: #e6c01e99;
    }
    &.recommand {
      background-color: #0b3c499e;
    }
    &.best {
      background-color: #a92e15a1;
    }
  }

  section {
    > div:first-child {
      max-width: ${({ theme }) => theme.media.pc}px;
      margin: 0 auto;
      padding: 3rem 0;
      width: 95%;
    }
    &:last-child {
      > div:first-child {
        padding-bottom: 5rem;
      }
    }
    &:nth-child(2n) {
      background: ${({ theme }) => theme.color.body2};
    }
  }
`;

import styled from 'styled-components';

// 1fr => px 값으로 변환이 안됨. 다시 말하면
// 자식에서 width: 100% 로 1fr의 값을 못가져옴
export const CardWrapper = styled.ul`
  display: grid;
  gap: 2rem;
  padding-bottom: 2rem;
  grid-template-columns: repeat(4, calc((100% - 6rem) / 4));

  ${({ theme }) => theme.mediaScreen.tablet`
    grid-template-columns: repeat(3, calc((100% - 4rem) / 3));
  `}

  ${({ theme }) => theme.mediaScreen.mphone`
    grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
  `}
`;

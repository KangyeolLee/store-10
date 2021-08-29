import styled from 'styled-components';
import Title from '@/components/Shared/Title';

export const MyPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2rem;
  gap: 2rem;
  margin-top: 8.5rem;
`;

export const MyPageTitle = styled(Title)`
  font-family: BMDOHYEON;
  background-color: ${({ theme }) => theme.color.background};
  padding: 1rem 0;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;
  line-height: 5rem;
  padding-bottom: 0.5rem;
  display: flex;
  gap: 1rem;

  ${({ theme }) => theme.mediaScreen.phone`
    font-size: 3.2rem;
  `}

  svg {
    fill: ${({ theme }) => theme.color['text-color']};
  }
`;

export const MyPagePointBackground = styled.div`
  position: absolute;
  height: 20rem;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
`;

export const MyPageBody = styled.div`
  flex: 1;

  h1 {
    ${({ theme }) => theme.fontSize.xxl};
  }
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    padding: 3.2rem 0;
  }
`;

export const MyPage = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 2rem;

  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    flex-direction: column;  
  `}
`;

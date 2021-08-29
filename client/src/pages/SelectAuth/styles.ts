import { GitHubSVG } from '@/assets/svgs';
import styled from 'styled-components';

export const SelectAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50rem;
  text-align: center;

  p,
  button {
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 5rem;
  }

  button {
    height: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    max-width: 40rem;

    h3 {
      ${({ theme }) => theme.fontSize.xl}
    }

    button {
      height: 4.5rem;
      ${({ theme }) => theme.fontSize.m}
      margin-bottom: 1rem;
    }

    input {
      height: 4.5rem;
      ${({ theme }) => theme.fontSize.m}
    }
  }
`;

export const Welcome = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.color['text-color']};
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const Info = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.color['text-color']};

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.s}
  }
`;

export const BackLoginContainer = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.line};

  a {
    margin-left: 1rem;
    color: ${({ theme }) => theme.color['text-color']};
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const GithubIcon = styled(GitHubSVG)`
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    width: 2rem;
  }
`;

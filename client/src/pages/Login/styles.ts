import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import { GitHubSVG } from '@/assets/svgs';

export const LoginTitle = styled(Title)`
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.xl}
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 46rem;
  justify-content: center;

  button,
  .input-container {
    margin-top: 2rem;
  }

  .validate-input {
    margin-bottom: 2rem;
  }

  button {
    height: 5rem;

    ${({ theme }) => theme.mediaScreen.btw_tab_mob`
      font-size: 1.65rem;
    `}
  }

  button.white {
    color: ${({ theme }) => theme.color['text-color']};
    background-color: ${({ theme }) => theme.color['reverse-text-color']};
  }
`;

export const GithubIcon = styled(GitHubSVG)`
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    width: 2rem;
  }
`;

export const LinkContainer = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color['text-color']};

  a {
    padding: 0 2rem;
    margin-left: 2rem;
    border-left: 1px solid gray;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const LogoImg = styled.img`
  height: 3rem;
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    height: 2rem;
  }
`;

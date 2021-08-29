import Checkbox from '@/components/Shared/Checkbox';
import styled from 'styled-components';

export const ApprovalContainer = styled.div`
  display: flex;
  max-width: 60rem;
  flex-direction: column;
  text-align: center;

  h3 {
    margin-bottom: 2rem;
  }

  h5 {
    text-align: initial;
  }

  button {
    margin: 0 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    h3 {
      ${({ theme }) => theme.fontSize.xl}
    }

    button {
      ${({ theme }) => theme.fontSize.m}
      margin-bottom: 1rem;
    }

    input {
      ${({ theme }) => theme.fontSize.m}
      height: 3rem;
    }

    label {
      ${({ theme }) => theme.fontSize.s}
    }

    span {
      width: 2rem;
      height: 2rem;
    }

    button.white {
      color: ${({ theme }) => theme.color['text-color']};
      background-color: ${({ theme }) => theme.color['reverse-text-color']};
    }
  }
`;

export const ApprovalCheckBox = styled(Checkbox)`
  margin: 2rem 0;
`;

export const ApprovalBox = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  text-align: initial;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  white-space: pre;
  border: 1px solid ${({ theme }) => theme.color.line};
  height: 20rem;
  overflow-y: scroll;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

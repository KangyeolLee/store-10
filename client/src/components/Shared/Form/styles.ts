import styled from 'styled-components';
import { IForm } from './Form';

export const Form = styled.form<IForm>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}rem;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  ${({ theme }) => theme.mediaScreen.phone`
    gap: 1.5rem;
  `}
`;

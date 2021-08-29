import styled from 'styled-components';
import ModalLayout from '../ModalLayout';

export const ShooppingCartModal = styled(ModalLayout)`
  button {
    display: none;
  }
`;

export const ShooppingCartModalHeader = styled.header`
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color['text-color']};
`;

export const ShooppingCartModalBody = styled.body`
  button {
    display: block;
    width: 100%;
    margin-top: 2rem;
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
    padding: 2rem;

    &:last-child {
      background-color: ${({ theme }) => theme.color['border-gray']};
      color: ${({ theme }) => theme.color.line};
      &:hover {
        background-color: rgb(211, 211, 211);
      }
    }
  }
`;

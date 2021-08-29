import styled, { css } from 'styled-components';
import { IButtonProps } from './Button';

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.3s;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  background-color: black;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};

  ${({ size }) => {
    if (size === 'Large') {
      return css`
        font-size: 3rem;
        padding: 1rem 2rem;
      `;
    } else if (size === 'Small') {
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
    } else {
      return css`
        font-size: 2rem;
        padding: 1rem 2rem;
      `;
    }
  }}

  ${({ color, theme, disabled }) => {
    if (disabled) {
      return css`
        background-color: ${theme.color.line};
        &:hover {
          background-color: ${theme.color.line};
        }
        &:active {
          background: ${theme.color.line};
        }
      `;
    } else if (color === 'primary') {
      return css`
        background-color: ${theme.color.primary};
        &:hover {
          background-color: ${theme.color.primary3};
        }
        &:active {
          background: ${theme.color.primary3};
        }
      `;
    } else if (color === 'black') {
      return css`
        background-color: #1e2222;
        &:hover {
          background-color: black;
        }
        &:active {
          background: black;
        }
      `;
    } else if (color === 'white') {
      return css`
        color: ${({ theme }) => theme.color['text-color']};
        border: 1px solid black;
        background-color: ${({ theme }) => theme.color['reverse-text-color']};
        &:hover {
          background-color: ${({ theme }) => theme.color.hover};
        }
        &:active {
          background-color: ${({ theme }) => theme.color.hover};
        }
      `;
    } else if (color === 'red') {
      return css`
        color: ${theme.color['off-white']};
        background-color: ${theme.color.error};
        &:hover {
          background-color: #ad1111;
        }
        &:active {
          background-color: #ad1111;
        }
      `;
    }
  }};
`;

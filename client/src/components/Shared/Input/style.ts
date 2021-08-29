import styled, { css } from 'styled-components';
import { ITextarea } from './Textarea';
import { IInput, IInputContainer, IInputLabel } from './Input';

export const InputContainer = styled.div<IInputContainer>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
`;

export const Label = styled.label<IInputLabel>`
  position: absolute;
  background-color: transparent;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  font-size: 1.8rem;
  cursor: text;
  transform: translate(12px, 12px) scale(1);
  line-height: 2rem;

  ${({ label, error }) => {
    if (label === 'Standard' || label === 'Outlined') {
      return css`
        color: ${({ theme }) => (error ? theme.color.error : theme.color.line)};
      `;
    } else if (label === 'Filled') {
      return css`
        color: ${({ theme }) => theme.color['off-white']};
      `;
    }
  }}

  &.focusing {
    transform: translate(6px, -20px) scale(0.75);
    transform-origin: top left;
    ${({ error }) => {
      return css`
        color: ${({ theme }) => (error ? theme.color.error : '#2ac1bc')};
      `;
    }}
  }
`;

export const Input = styled.input<IInput>`
  padding: 1rem;
  color: ${({ theme }) => theme.color['text-color']};
  font-size: 1.8rem;
  outline: none;
  border: none;
  width: 100%;
  height: 46px;

  ${({ label, labelName, error }) => {
    if (label === 'Standard') {
      return css`
        border-bottom: ${({ theme }) =>
          error ? `1px solid ${theme.color.error}` : '1px solid black'};
        &:focus {
          border-bottom: ${({ theme }) =>
            error ? `2px solid ${theme.color.error}` : '1px solid #2ac1bc'};
        }

        &::placeholder {
          color: ${({ theme }) =>
            labelName ? 'transparent' : theme.color.placeholder};
        }

        &.focusing {
          &::placeholder {
            color: ${({ theme }) => theme.color.placeholder};
          }
        }
      `;
    } else if (label === 'Outlined') {
      return css`
        border: ${({ theme }) =>
          error ? `1px solid ${theme.color.error}` : '1px solid #c1c5c5'};
        border-radius: 10px;
        background-color: ${({ theme }) => theme.color['reverse-text-color']};
        &:focus {
          border: ${({ theme }) =>
            error ? `2px solid ${theme.color.error}` : '1px solid #2ac1bc'};
          outline: none;
        }

        &::placeholder {
          color: ${({ theme }) =>
            labelName ? 'transparent' : theme.color.placeholder};
        }

        &.focusing {
          &::placeholder {
            color: ${({ theme }) => theme.color.placeholder};
          }
        }
      `;
    } else if (label === 'Filled') {
      return css`
        border: ${({ theme }) =>
          error ? `1px solid ${theme.color.error}` : 'none'};
        border-radius: 10px;
        background-color: #c1c5c5;
        &:focus {
          border: ${({ theme }) =>
            error ? `2px solid ${theme.color.error}` : '1px solid #2ac1bc'};
          outline: none;
        }

        &::placeholder {
          color: ${({ theme }) =>
            labelName ? 'transparent' : theme.color['off-white']};
        }

        &.focusing {
          &::placeholder {
            color: ${({ theme }) => theme.color['off-white']};
          }
        }
      `;
    }
  }}
`;

export const ErrorText = styled.div<{ helperAlign: string | undefined }>`
  color: ${({ theme }) => theme.color.error};
  position: absolute;
  margin-top: 0.5rem;
  margin-left: 0.5rem;

  ${({ helperAlign }) =>
    helperAlign
      ? css`
          width: 100%;
          text-align: ${helperAlign};
        `
      : css``}
`;

export const NumberInputArea = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color['off-white']};
  border-radius: 2.5rem;
`;

export const AdjustButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.fontSize.l};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const NumberInput = styled.input`
  appearance: textfield;
  padding: 0.5rem 1.5rem;
  width: 5rem;
  outline: none;
  border: none;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Textarea = styled.textarea<ITextarea>`
  font-family: 'Noto Sans', sans-serif;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  height: 15rem;
  padding: 2rem;
  min-height: 6rem;
  max-height: 20rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  resize: ${({ resize }) => resize};
  color: ${({ theme }) => theme.color['text-color']};
  background-color: ${({ theme }) => theme.color.background};
  ${({ theme }) => theme.fontSize.m};
  overflow: hidden;

  &.error-focus:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.error};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  &::-webkit-input-placeholder {
    font-family: 'Noto Sans', sans-serif;
  }

  ${({ theme }) => theme.mediaScreen.tablet`
      font-size: 1.25rem;
      height: 10rem;
  `}
`;

export const FileInputButton = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px dashed #aaa;
  cursor: pointer;

  ${({ theme }) => theme.mediaScreen.phone`
    gap: 1rem;
    padding: 1rem;
    font-size: 1.4rem;
  `}

  .helper-text {
    color: #adadad;
  }

  &:hover {
    opacity: 0.75;
  }

  svg {
    fill: #adadad;

    ${({ theme }) => theme.mediaScreen.tablet`
      width: 7rem;
      height: 7rem;
    `}

    ${({ theme }) => theme.mediaScreen.phone`
      width: 4.5rem;
      height: 4.5rem;
    `}
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  gap: 2rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 1rem;
  text-align: right;
  color: ${({ theme }) => theme.color.error};
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 15rem;
  max-width: 30%;

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    width: 30%;
    height: 10rem;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 3rem;
  width: 2.5rem;
  height: 2.5rem;
  box-sizing: border-box;
  background-color: #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: #fff;
  }

  &:hover {
    opacity: 0.75;
  }
`;

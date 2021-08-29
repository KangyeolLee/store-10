import styled from 'styled-components';

export const LabelButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  background: none;
  border: none;
  outline: none;
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color['text-color']};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 'none' : '0.4')};
  }
`;

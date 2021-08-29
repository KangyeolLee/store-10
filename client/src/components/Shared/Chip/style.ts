import styled from 'styled-components';
import { IChip } from './Chip';

export const Chip = styled.span<IChip>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border: ${(props) => props.border || `1px solid ${props.theme.color.line}`};
  padding: 0.6rem 0.8rem;
  border-radius: 1.3rem;
  cursor: pointer;
  display: in;
`;

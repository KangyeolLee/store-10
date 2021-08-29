import styled from 'styled-components';

export const OrderInfoHeader = styled.header`
  padding: 2rem 0;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color['border-gray']};
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color['text-color']};
`;

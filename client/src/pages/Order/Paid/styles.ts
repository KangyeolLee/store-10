import styled from 'styled-components';

export const OrderPaid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DoneMessage = styled.span`
  margin-top: 1.2rem;
  ${({ theme }) => theme.fontSize.xl};
  ${({ theme }) => theme.fontWeight.xl};
  color: ${({ theme }) => theme.color['text-color']};
`;

export const SubMessage = styled.span`
  margin-top: 1.2rem;
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.l};
  color: ${({ theme }) => theme.color.label};
  text-align: center;
`;

export const HiddenMessage = styled.span`
  margin-top: 1.2rem;
  ${({ theme }) => theme.fontSize.xs};
  ${({ theme }) => theme.fontWeight.s};
  color: ${({ theme }) => theme.color.label};
`;

export const ButtonWrapper = styled.div`
  width: 30rem;
  button {
    margin: 0 auto;
  }
  margin-top: 2rem;
`;

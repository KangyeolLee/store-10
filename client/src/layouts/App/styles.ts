import styled from 'styled-components';

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.body};
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 5.5rem;
  right: 1rem;
  z-index: 9999999;
  padding: 1rem;
  background-color: #ededed;
  border-radius: 1rem;
  border: 1px solid #111;
`;

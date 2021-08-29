import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
})`
  width: fit-content;
  z-index: 9999999;

  .toast {
    border-radius: 10rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    min-height: 54px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    font-family: 'BMDOHYEON';
    font-size: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
  }
`;

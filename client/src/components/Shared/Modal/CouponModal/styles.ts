import styled from 'styled-components';
import ModalLayout from '../ModalLayout';

export const CouponModal = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CouponWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &.selected {
    border: 1rem solid ${({ theme }) => theme.color.primary};
    margin: -1rem;
    border-radius: 1rem;
    > div {
      opacity: 0.4;
    }
    > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
`;

export const CouponModalLayout = styled(ModalLayout)`
  > div {
    max-width: 62rem;
    > div {
      > button {
        display: none;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    > div {
      width: 100%;
      padding: 1.2rem;
    }
  }
`;

export const CouponModalFooter = styled.footer`
  display: flex;
  margin-top: auto;
  padding-top: 3rem;
  gap: 1.2rem;

  button {
    flex: 1;
  }
`;

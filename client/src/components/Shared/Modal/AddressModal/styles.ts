import styled from 'styled-components';
import Checkbox from '@/components/Shared/Checkbox';
import {
  ModalHeader,
  ModalDivider,
  ModalBody,
  ModalButtonArea,
} from '../styles';
import ModalLayout from '../ModalLayout';

export const AddressModalLayout = styled(ModalLayout)`
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    > div {
      padding: 1.6rem;
      width: 100%;
    }
  }
`;

export const AddressModalHeader = styled(ModalHeader)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 30px;
  }
`;
export const AddressModalDivider = styled(ModalDivider)``;
export const AddressModalBody = styled(ModalBody)`
  overflow-y: auto;
`;
export const AddressModalButtonArea = styled(ModalButtonArea)`
  margin-top: 1.2rem;
`;

export const PostcodeWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  > div {
    flex: 1;
    margin-left: 2rem;
    > input {
      margin-top: 0;
    }
  }

  button {
    border-radius: 10px;
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const DefaultAddrssCheckbox = styled(Checkbox)`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.color['text-color']};
`;

export const DuamPostWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 50rem;
  background-color: rgba(1, 1, 1, 0.55);
`;

export const HeaderEmptyItem = styled.div`
  width: 3rem;
`;

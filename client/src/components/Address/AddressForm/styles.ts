import styled from 'styled-components';
import Checkbox from '@/components/Shared/Checkbox';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import Select from '@/components/Shared/Select';

export const PostcodeWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  > div {
    flex: 1;
    margin-left: 1.2rem;
    > input {
      margin-top: 0;
    }
  }

  button {
    border-radius: 0.4rem;
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const DefaultAddrssCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.color['text-color']};
  margin-right: auto;
`;

export const DuamPostWrapper = styled(ModalLayout)`
  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    > div {
      padding: 1.6rem;
      width: 100%;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border-radius: 0.4rem;
  }
  &:nth-child(2) {
    margin-top: 1.2rem;
  }
  &:nth-child(3) {
    margin-top: 1.2rem;
  }
  &:nth-child(4) {
    margin-top: 0.8rem;
  }
  &:nth-child(5) {
    margin-top: 0.8rem;
  }
  &:nth-child(6) {
    margin-top: 1.5rem;
  }
`;

export const FormRowName = styled.span`
  flex: 0 0 6rem;
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.s};
`;

export const FormFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding-top: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.color['border-gray']};
`;

export const PhoneSelect = styled(Select)`
  select {
    width: 8.6rem;
    height: 4.5rem;
    border: 1px solid ${({ theme }) => theme.color.placeholder};
    border-radius: 0.4rem;
  }
`;

export const PhoneWrapper = styled.div`
  display: flex;
  > div {
    &:first-child {
      margin-right: 0.8rem;
    }
  }
`;

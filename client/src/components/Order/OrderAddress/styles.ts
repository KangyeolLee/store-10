import styled, { css } from 'styled-components';
import { OrderInfoHeader } from '../styles';
import Checkbox from '@/components/Shared/Checkbox';
import Select from '@/components/Shared/Select';
import { Input } from '@/components/Shared/Input';

export const OrderAddressHeader = styled(OrderInfoHeader)`
  margin-top: 2.4rem;
  button {
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.l};
    ${({ theme }) => theme.fontSize.m};
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const AddressInfo = styled.div`
  padding: 1.2rem 0;
  color: ${({ theme }) => theme.color['text-color']};
`;

const AddressInfoText = css`
  margin-top: 1.2rem;
  display: block;
`;
export const AddressNameText = styled.span`
  ${AddressInfoText}
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
`;

export const AddressText = styled.span`
  ${AddressInfoText}
  ${({ theme }) => theme.fontWeight.m};
  ${({ theme }) => theme.fontSize.m};
`;

export const PhoneText = styled.span`
  ${AddressInfoText}
  ${({ theme }) => theme.fontWeight.s};
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.line};
`;

export const AddressCheckbox = styled(Checkbox)`
  margin-top: 2.4rem;
  ${({ theme }) => theme.fontWeight.m};
`;

export const AddressSelect = styled(Select)`
  margin-top: 1.2rem;
`;

export const AddressInput = styled(Input)`
  margin-top: 1.2rem;
  input {
    border: 1px solid ${({ theme }) => theme.color['border-gray']};
    ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color['text-color']};
  }
`;

export const DefaultAddress = styled.span`
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 0.4rem 0.6rem;
  ${({ theme }) => theme.fontSize.xs};
  margin-left: 1.2rem;
`;

export const AddressEmpty = styled.div`
  font-family: 'BMDOHYEON';
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
`;

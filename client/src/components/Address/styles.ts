import styled from 'styled-components';

export const AddressList = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

export const AddressItem = styled.li`
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.color['body']};
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color['border-gray']};
  &.selected-address {
    border: 0.1rem solid ${({ theme }) => theme.color.primary};
  }
`;

export const AddressItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddressName = styled.span`
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.m};
  margin-right: auto;
  color: ${({ theme }) => theme.color['text-color']};
`;

export const DefaultAddress = styled.span`
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color.label};
  color: ${({ theme }) => theme.color.label};
  padding: 0.4rem 0.6rem;
  ${({ theme }) => theme.fontSize.s};
`;

export const SelectedAddress = styled.span`
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 0.4rem 0.6rem;
  ${({ theme }) => theme.fontSize.s};
  margin-left: 0.8rem;
`;

export const AddressInfoText = styled.span`
  padding: 0.4rem 0;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color['text-color']};
  display: block;
`;

export const AddressInfoPhone = styled(AddressInfoText)`
  color: ${({ theme }) => theme.color.label};
`;

export const AddressInfo = styled.section`
  margin-top: 1.2rem;
`;

export const AddressItemFooter = styled.footer`
  margin-top: 1.2rem;
  display: flex;
  button {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
    border: 1px solid ${({ theme }) => theme.color['border-gray']};

    &:first-child {
      margin-right: 0.8rem;
    }

    &:nth-child(2) {
      margin-right: auto;
    }
  }
`;

export const AddressListFooter = styled.footer`
  margin-top: 1.2rem;
  button {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
  padding-top: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.color['border-gray']};
`;

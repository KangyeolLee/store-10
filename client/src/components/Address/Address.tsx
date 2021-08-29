import React, { Dispatch } from 'react';
import * as S from './styles';
import Button from '@/components/Shared/Button';
import { useGetAddresses, useDeleteAddress } from '@/hooks/queries/address';
import { IAddress } from '@/types';

interface IAddresseProps {
  selectAddress: Dispatch<IAddress | null>;
  selectedAddress: IAddress | null;
  setAddressToModify: Dispatch<IAddress>;
  toggleModal: () => void;
  setOpenForm: Dispatch<boolean>;
}

const Address = ({
  selectAddress,
  selectedAddress,
  toggleModal,
  setAddressToModify,
  setOpenForm,
}: IAddresseProps) => {
  const { data, isLoading } = useGetAddresses();
  const { mutate } = useDeleteAddress();

  const onClickSelectAddress = (address: IAddress) => () => {
    selectAddress(address);
    toggleModal();
  };

  const onClickModify = (address: IAddress) => () => {
    setAddressToModify(address);
    setOpenForm(true);
  };

  const onClickDelete = (id?: number) => {
    if (confirm('정말 삭제하시겠습니까?') && id) {
      mutate(id);
      if (selectedAddress?.id === id) selectAddress(null);
    }
  };

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.AddressList>
        {data.map((address) => (
          <S.AddressItem
            key={address.id}
            className={
              address.id === selectedAddress?.id
                ? 'selected-address'
                : undefined
            }
          >
            <S.AddressItemHeader>
              <S.AddressName>{address.name}</S.AddressName>

              {!!address.isDefault && (
                <S.DefaultAddress>기본 배송지</S.DefaultAddress>
              )}
              {address.id === selectedAddress?.id && (
                <S.SelectedAddress>선택된 배송지</S.SelectedAddress>
              )}
            </S.AddressItemHeader>
            <S.AddressInfo>
              <S.AddressInfoText>{address.address}</S.AddressInfoText>
              <S.AddressInfoText>{address.detailAddress}</S.AddressInfoText>
              <S.AddressInfoPhone>{address.phone}</S.AddressInfoPhone>
            </S.AddressInfo>
            <S.AddressItemFooter>
              <Button
                type="button"
                color="white"
                size="Small"
                onClick={onClickModify(address)}
              >
                수정
              </Button>
              <Button
                type="button"
                color="white"
                size="Small"
                onClick={() => onClickDelete(address.id)}
              >
                삭제
              </Button>
              {address.id !== selectedAddress?.id && (
                <Button
                  type="button"
                  color="primary"
                  size="Small"
                  onClick={onClickSelectAddress(address)}
                >
                  선택
                </Button>
              )}
            </S.AddressItemFooter>
          </S.AddressItem>
        ))}
      </S.AddressList>
      <S.Footer>
        <Button type="button" color="primary" onClick={() => setOpenForm(true)}>
          배송지 추가
        </Button>
      </S.Footer>
    </>
  );
};

export default Address;

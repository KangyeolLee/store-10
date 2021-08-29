import React, { useState, useEffect, Dispatch } from 'react';
import * as S from './styles';
import { DELIVERY_REQUEST_MESSAGES } from '@/contstants';
import AddressModal from '@/components/Shared/Modal/AddressModal';
import useModal from '@/hooks/useModal';
import { useGetDefaultAddress } from '@/hooks/queries/address';
import { IAddress, IOrder } from '@/types';

interface IProps {
  setOrder: Dispatch<
    Partial<IOrder> | ((prev: Partial<IOrder>) => Partial<IOrder>)
  >;
  updateDefaultAddress: boolean;
  setUpdateDefaultAddress: Dispatch<boolean>;
  address: IAddress | null;
  selectAddress: Dispatch<IAddress | null>;
}
const OrderAddress = ({
  setOrder,
  updateDefaultAddress,
  setUpdateDefaultAddress,
  address,
  selectAddress,
}: IProps) => {
  const [requestMessage, setRequestMessage] = useState('');
  const [requestMessageInput, setRequestMessageInput] = useState('');

  const { data, isLoading } = useGetDefaultAddress();

  useEffect(() => {
    if (data) {
      selectAddress(data);
    }
  }, [data, selectAddress]);

  useEffect(() => {
    const delivery_request_message =
      requestMessage === '직접입력' ? requestMessageInput : requestMessage;
    setOrder((prev: Partial<IOrder>) => ({
      ...prev,
      ...(address ? { address_id: address.id } : {}),
      ...(delivery_request_message
        ? { delivery_request_message }
        : { delivery_request_message: null }),
    }));
  }, [
    data,
    setOrder,
    address,
    requestMessage,
    requestMessageInput,
    updateDefaultAddress,
  ]);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRequestMessage(e.currentTarget.value);
  };
  const [isOpen, toggleModal] = useModal(false);

  const renderAddressInfo = () => {
    if (!address) {
      return (
        <S.AddressEmpty>
          배송지가 없습니다. 배송지를 추가해주세요!
        </S.AddressEmpty>
      );
    }
    return (
      <S.AddressInfo>
        <S.AddressNameText>
          {address.name}
          {!!address.isDefault && (
            <S.DefaultAddress>기본 배송지</S.DefaultAddress>
          )}
        </S.AddressNameText>
        <S.AddressText>
          {address.address}, {address.detailAddress}
        </S.AddressText>
        <S.PhoneText>{address.phone}</S.PhoneText>

        {!address.isDefault && (
          <S.AddressCheckbox
            label="기본 배송지로 저장"
            checked={updateDefaultAddress}
            onChange={(e) => setUpdateDefaultAddress(e.currentTarget.checked)}
          />
        )}

        <S.AddressSelect
          items={DELIVERY_REQUEST_MESSAGES}
          onChange={onChangeSelect}
        />
        {requestMessage === '직접입력' && (
          <S.AddressInput
            name="message"
            type="text"
            label="Outlined"
            placeholder="배송시 요청사항을 입력해주세요"
            onChange={(e) => setRequestMessageInput(e.currentTarget.value)}
          />
        )}
      </S.AddressInfo>
    );
  };

  return (
    <article>
      <S.OrderAddressHeader>
        <span>배송지</span>
        <button onClick={() => toggleModal()}>
          {address ? '변경' : '추가'}
        </button>
      </S.OrderAddressHeader>
      {isLoading ? <div>Loading...</div> : renderAddressInfo()}

      {isOpen && (
        <AddressModal
          toggleModal={toggleModal}
          selectAddress={selectAddress}
          address={address}
        />
      )}
    </article>
  );
};

export default OrderAddress;

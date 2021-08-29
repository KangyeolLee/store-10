import React, { useState, Dispatch } from 'react';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import Address from '@/components/Address';
import AddressForm from '@/components/Address/AddressForm';
import { LeftChevron } from '@/assets/svgs';
import { IAddress } from '@/types';

import * as S from './styles';

interface IProps {
  toggleModal: () => void;
  selectAddress: Dispatch<IAddress | null>;
  address: IAddress | null;
}

const AddressModal = ({ toggleModal, selectAddress, address }: IProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [addressToModify, setAddressToModify] = useState<IAddress | null>(null);

  const renderHeaderText = () => {
    if (!openForm) return <span>배송지 선택</span>;
    if (addressToModify) return <span>배송지 수정</span>;
    return <span>배송지 추가</span>;
  };

  return (
    <S.AddressModalLayout
      width="40rem"
      height="65rem"
      toggleModal={toggleModal}
    >
      <S.AddressModalHeader>
        {openForm ? (
          <button onClick={() => setOpenForm(false)}>
            <LeftChevron />
          </button>
        ) : (
          <S.HeaderEmptyItem />
        )}
        {renderHeaderText()}
        <S.HeaderEmptyItem />
      </S.AddressModalHeader>
      <S.AddressModalDivider />
      {openForm ? (
        <AddressForm
          toggleModal={toggleModal}
          addressToModify={addressToModify}
          setAddressToModify={setAddressToModify}
          setOpenForm={setOpenForm}
          address={address}
          selectAddress={selectAddress}
        />
      ) : (
        <Address
          setOpenForm={setOpenForm}
          selectedAddress={address}
          selectAddress={selectAddress}
          toggleModal={toggleModal}
          setAddressToModify={setAddressToModify}
        />
      )}
    </S.AddressModalLayout>
  );
};

export default AddressModal;

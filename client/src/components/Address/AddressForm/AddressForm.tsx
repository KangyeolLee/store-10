import React, { useState, Dispatch, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Input from '@/components/Shared/Input/Input';
import { IAddress } from '@/types';
import { usePostAddress, useUpdateAddress } from '@/hooks/queries/address';
import Button from '@/components/Shared/Button';
import Form from '@/components/Shared/Form';
import useModal from '@/hooks/useModal';
import * as S from './styles';
import { KOREAN_PHONE_PREFIX } from '@/contstants';
import { validatePhone } from '@/utils/validator';

interface IProps {
  address: IAddress | null;
  addressToModify: IAddress | null;
  toggleModal: () => void;
  setAddressToModify: Dispatch<IAddress | null>;
  setOpenForm: Dispatch<boolean>;
  selectAddress: Dispatch<IAddress>;
}

const AddressForm = ({
  addressToModify,
  toggleModal,
  setAddressToModify,
  setOpenForm,
  address,
  selectAddress,
}: IProps) => {
  const [isPostcodeOpen, toggleIsPostcodeOpen] = useModal(false);
  const [inputs, setInputs] = useState<IAddress>({
    id: addressToModify ? addressToModify.id : undefined,
    name: addressToModify ? addressToModify.name : '',
    postcode: addressToModify ? addressToModify.postcode : '',
    address: addressToModify ? addressToModify.address : '',
    detailAddress: addressToModify ? addressToModify.detailAddress : '',
    phone: addressToModify ? addressToModify.phone.slice(4) : '',
    isDefault: addressToModify ? addressToModify.isDefault : false,
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({
    name: false,
    postcode: false,
    address: false,
    detailAddress: false,
    phone: false,
  });
  const [phonePrefix, setPhonePrefix] = useState('010');

  const checkValidation = (): boolean => {
    let isValid = true;
    for (const [key, value] of Object.entries(inputs)) {
      if (key === 'phone') {
        if (value.length < 8) {
          setErrors((prev) => ({ ...prev, phone: true }));
          isValid = false;
        }
      } else if (!value && errors[key] !== undefined) {
        setErrors((prev) => ({ ...prev, [key]: true }));
        isValid = false;
      }
    }
    return isValid;
  };
  const postMutation = usePostAddress();
  const updateMutation = useUpdateAddress();

  useEffect(
    () => () => {
      setAddressToModify(null);
    },
    [setAddressToModify]
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const onChangePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = validatePhone(e);
    if (!value) return;

    setInputs({ ...inputs, phone: value });
    if (value.length >= 8) {
      setErrors({ ...errors, phone: false });
    }
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setInputs({ ...inputs, [name]: checked });
  };

  const onCompleteSearchAddress = (data: Record<string, string>) => {
    setInputs({
      ...inputs,
      address: data.address,
      postcode: data.zonecode,
    });
    toggleIsPostcodeOpen();
  };

  const onFocusDetailAddress = () => {
    if (!inputs.postcode || !inputs.address) {
      toggleIsPostcodeOpen();
    }
  };

  const onClickSave = () => {
    if (!checkValidation()) {
      return;
    }
    if (addressToModify) {
      updateMutation.mutate({
        ...inputs,
        phone: `${phonePrefix}-${inputs.phone}`,
      });
      setOpenForm(false);
      if (address?.id === addressToModify.id) {
        selectAddress({ ...inputs, phone: `${phonePrefix}-${inputs.phone}` });
      } else if (address?.isDefault && inputs.isDefault) {
        selectAddress({ ...address, isDefault: false });
      }
    } else {
      postMutation.mutate({
        ...inputs,
        phone: `${phonePrefix}-${inputs.phone}`,
      });
      selectAddress({ ...inputs, phone: `${phonePrefix}-${inputs.phone}` });
      toggleModal();
    }
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 머지 했는데 오류 나는거 땜에 임시로 넣어둡니다 동진님~
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <S.FormRow>
          <S.FormRowName>받는 사람</S.FormRowName>
          <Input
            type="text"
            label="Outlined"
            name="name"
            placeholder="받는 사람"
            fullWidth
            value={inputs.name}
            onChange={onChangeInput}
            error={errors.name}
          />
        </S.FormRow>

        <S.FormRow>
          <S.FormRowName>연락처</S.FormRowName>
          <S.PhoneWrapper>
            <S.PhoneSelect
              items={KOREAN_PHONE_PREFIX.map((num) => ({
                value: num,
                name: num,
              }))}
              onChange={(e) => setPhonePrefix(e.currentTarget.value)}
            />
            <Input
              type="text"
              label="Outlined"
              name="phone"
              fullWidth
              placeholder="연락처"
              value={inputs.phone}
              onChange={onChangePhoneInput}
              error={errors.phone}
            />
          </S.PhoneWrapper>
        </S.FormRow>

        <S.FormRow>
          <S.FormRowName>주소</S.FormRowName>
          <S.PostcodeWrapper>
            <Button
              type="button"
              color="primary"
              size="Small"
              onClick={toggleIsPostcodeOpen}
            >
              주소 찾기
            </Button>

            <Input
              type="text"
              label="Outlined"
              name="postcode"
              placeholder="우편번호 검색"
              fullWidth
              value={inputs.postcode}
              onFocus={() => toggleIsPostcodeOpen()}
              attributes={{
                readOnly: true,
              }}
              error={errors.postcode}
            />
          </S.PostcodeWrapper>
        </S.FormRow>

        <S.FormRow>
          <S.FormRowName></S.FormRowName>
          <Input
            type="text"
            label="Outlined"
            name="address"
            placeholder="주소"
            value={inputs.address}
            fullWidth
            onFocus={toggleIsPostcodeOpen}
            attributes={{
              readOnly: true,
            }}
            error={errors.address}
          />
        </S.FormRow>
        <S.FormRow>
          <S.FormRowName></S.FormRowName>
          <Input
            type="text"
            label="Outlined"
            name="detailAddress"
            placeholder="상세 주소"
            fullWidth
            value={inputs.detailAddress}
            onFocus={onFocusDetailAddress}
            onChange={onChangeInput}
            error={errors.detailAddress}
          />
        </S.FormRow>

        <S.FormRow>
          <S.FormRowName></S.FormRowName>
          <S.DefaultAddrssCheckbox
            name="isDefault"
            checked={inputs.isDefault}
            label="기본 배송지로 설정"
            onChange={onChangeCheckbox}
          />
        </S.FormRow>

        {isPostcodeOpen && (
          <S.DuamPostWrapper
            width="35rem"
            toggleModal={toggleIsPostcodeOpen}
            onClick={toggleIsPostcodeOpen}
          >
            <DaumPostcode onComplete={onCompleteSearchAddress} height="50rem" />
          </S.DuamPostWrapper>
        )}
      </Form>
      <S.FormFooter>
        <Button type="button" color="primary" onClick={onClickSave}>
          저장
        </Button>
      </S.FormFooter>
    </>
  );
};

export default AddressForm;

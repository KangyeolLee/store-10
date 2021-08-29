import React from 'react';
import * as S from './styles';
import Button from '@/components/Shared/Button';
import { useHistory } from '@/lib/Router';

interface IProps {
  toggleModal: () => void;
}
const ShoppingCartModal = ({ toggleModal }: IProps) => {
  const { historyPush } = useHistory();
  return (
    <S.ShooppingCartModal
      width="37.5rem"
      height="27rem"
      toggleModal={toggleModal}
    >
      <S.ShooppingCartModalHeader>
        <span>장바구니에 상품을 담았습니다.</span>
      </S.ShooppingCartModalHeader>
      <S.ShooppingCartModalBody>
        <Button
          onClick={() => historyPush('/cart')}
          type="button"
          color="primary"
          size="Large"
        >
          장바구니 보러가기
        </Button>
        <Button onClick={toggleModal} type="button" color="black" size="Large">
          확인
        </Button>
      </S.ShooppingCartModalBody>
    </S.ShooppingCartModal>
  );
};

export default ShoppingCartModal;

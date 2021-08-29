import React, { Dispatch } from 'react';
import Checkbox from '@/components/Shared/Checkbox';
import ShoppingCartItem from '@/components/ShoppingCart/ShopingCartItem';
import { ICart } from '@/types';
import * as S from './styles';
import LabelButton from '@/components/Shared/LabelButton';
import { DeleteConfirmModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';

interface IShoppingCartListProps {
  shoppingCartItems: ICart[];
  checkedItems: ICart[];
  setShoppingCartItems: Dispatch<ICart[]>;
  removeFromCart: (ids: number[]) => void;
  setUnCheckedList: Dispatch<number[]>;
  unCheckedList: number[];
  disabled: boolean;
}

const ShoppingCartList = ({
  shoppingCartItems,
  setShoppingCartItems,
  removeFromCart,
  checkedItems,
  setUnCheckedList,
  unCheckedList,
  disabled,
}: IShoppingCartListProps) => {
  const [modalOpen, toggleModal] = useModal(false);

  const setProductState = (index: number, state: Record<string, unknown>) => {
    shoppingCartItems.splice(index, 1, {
      ...shoppingCartItems[index],
      ...state,
    });

    setShoppingCartItems([...shoppingCartItems]);
  };

  const isAllchecked = checkedItems.length === shoppingCartItems.length;

  const onChangeAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const shouldAllCheck = e.target.checked;
    if (shouldAllCheck) {
      setUnCheckedList([]);
    } else {
      setUnCheckedList(shoppingCartItems.map((item) => item.productId));
    }
  };

  const onClickRemoveSelectedItems = () => {
    const checkedIds = checkedItems.map((item) => item.productId);
    removeFromCart(checkedIds);
    toggleModal();
  };

  return (
    <div>
      <S.ShoppingCartHeader>
        {!disabled && (
          <>
            <Checkbox
              onChange={onChangeAllCheck}
              checked={isAllchecked}
              label={'전체 선택'}
            />
            <LabelButton
              onClick={toggleModal}
              disabled={!shoppingCartItems.length}
            >
              선택 삭제
            </LabelButton>
          </>
        )}
      </S.ShoppingCartHeader>
      {!disabled ? (
        <S.ShoppingCartList>
          {shoppingCartItems.map((item, index) => (
            <ShoppingCartItem
              key={item.productId}
              item={item}
              index={index}
              setProductState={setProductState}
              removeFromCart={removeFromCart}
              setUnCheckedList={setUnCheckedList}
              unCheckedList={unCheckedList}
            />
          ))}
        </S.ShoppingCartList>
      ) : (
        <S.CartThung title="장바구니가 비어있습니다." />
      )}
      {modalOpen && (
        <DeleteConfirmModal
          toggleModal={toggleModal}
          removeSelected={onClickRemoveSelectedItems}
        />
      )}
    </div>
  );
};

export default ShoppingCartList;

import React, { Dispatch } from 'react';
import * as S from './styles';
import { CloseSVG } from '@/assets/svgs';
import { wonFormat, calculateDiscount } from '@/utils/helper';
import Checkbox from '@/components/Shared/Checkbox';
import { ICart } from '@/types';
import { useHistory } from '@/lib/Router';
import { DeleteConfirmModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';
import { NumberInput } from '@/components/Shared/Input';

interface IShoppingCartItemProps {
  item: ICart;
  index: number;
  setProductState: (index: number, state: Record<string, unknown>) => void;
  removeFromCart: (ids: number[]) => void;
  setUnCheckedList: Dispatch<number[]>;
  unCheckedList: number[];
}
const ShoppingCartItem = ({
  item,
  index,
  setProductState,
  removeFromCart,
  setUnCheckedList,
  unCheckedList,
}: IShoppingCartItemProps) => {
  const { historyPush } = useHistory();
  const [modalOpen, toggleModal] = useModal(false);

  const onClickPlus = () => {
    setProductState(index, { count: item.count + 1 });
  };

  const onClickMinus = () => {
    if (item.count <= 1) {
      return;
    }
    setProductState(index, { count: item.count - 1 });
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setUnCheckedList(
        unCheckedList.filter((unChekcedId) => unChekcedId !== item.productId)
      );
    } else {
      setUnCheckedList([...unCheckedList, item.productId]);
    }
  };

  const onClickProductPage = () => {
    historyPush(`/detail/${item.productId}`);
  };

  const onClickRemove = () => {
    removeFromCart([item.productId]);
    toggleModal();
  };
  const isUnCehcked = !!unCheckedList.find(
    (uncheckedId) => uncheckedId === item.productId
  );

  return (
    <S.ShoppingCartItem>
      <Checkbox checked={!isUnCehcked} onChange={onChangeCheckbox} />
      <S.ImgWrapper onClick={() => historyPush(`/detail/${item.productId}`)}>
        <img src={item.image} onClick={onClickProductPage} />
      </S.ImgWrapper>
      <S.ItemInfo onClick={onClickProductPage}>
        <S.ItemInfoName
          onClick={() => historyPush(`/detail/${item.productId}`)}
        >
          {item.title}
        </S.ItemInfoName>
        <S.ItemInoPriceWrapper>
          <div>
            <S.ItemInfoPrice
              className={item.discount ? 'strikethrough' : undefined}
            >
              {wonFormat(+item.price)}
            </S.ItemInfoPrice>
            {!!item.discount && (
              <S.ItemInfoPrice className="discount">
                {wonFormat(
                  calculateDiscount({
                    price: +item.price,
                    discount: item.discount,
                  })
                )}
              </S.ItemInfoPrice>
            )}
          </div>
          <S.TotalPrice>
            <S.PriceNumberInput
              type="number"
              name="price-count"
              min={1}
              value={item.count}
              handleClickOnMinus={onClickMinus}
              handleClickOnPlus={onClickPlus}
              // TODO: props optional로 하던지, hanleOnChange 사용하도록
              handleOnChnage={(e) => {}}
            />
            <span>{wonFormat(item.count * item.price)}</span>
          </S.TotalPrice>
        </S.ItemInoPriceWrapper>
      </S.ItemInfo>

      <S.CloseButton onClick={toggleModal}>
        <CloseSVG stroke="black" width={22} height={22} strokeWidth="0.2rem" />
      </S.CloseButton>
      {modalOpen && (
        <DeleteConfirmModal
          toggleModal={toggleModal}
          removeSelected={onClickRemove}
        />
      )}
    </S.ShoppingCartItem>
  );
};

export default ShoppingCartItem;

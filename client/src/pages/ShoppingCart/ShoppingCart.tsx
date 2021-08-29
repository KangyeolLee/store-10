import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ShoppingCartList from '@/components/ShoppingCart/ShoppingCartList';
import ShoppingCartSummary from '@/components/ShoppingCart/ShoppingCartSummary';
import { ICart } from '@/types';
import { useGetCarts, useDeleteCart } from '@/hooks/queries/cart';
import { useRecoilValue } from 'recoil';
import { userState } from '@/recoil/user';
import { Redirect } from '@/lib/Router';
import Title from '@/components/Shared/Title';

const ShoppingCart = () => {
  const { data } = useGetCarts();
  const { mutate } = useDeleteCart();
  const [unCheckedList, setUnCheckedList] = useState<number[]>([]);
  const [shoppingCartItems, setShoppingCartItems] = useState<ICart[]>([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (data) {
      setShoppingCartItems(data);
    }
  }, [data]);

  const checkedItems = shoppingCartItems.filter(
    (item) =>
      !unCheckedList.find((uncheckedId) => item.productId === uncheckedId)
  );
  const disabled = !shoppingCartItems.length;

  const removeFromCart = (ids: number[]) => {
    const checkNotRemovedItems = (item: ICart) => !ids.includes(item.productId);
    setShoppingCartItems(shoppingCartItems.filter(checkNotRemovedItems));
    mutate(ids);
  };

  if (!user) return <Redirect to="/" />;

  return (
    <S.ShoppingCart className="container">
      <Title className="title" level={3}>
        장바구니
      </Title>
      <div className="cart-wrapper">
        <ShoppingCartList
          shoppingCartItems={shoppingCartItems}
          checkedItems={checkedItems}
          setShoppingCartItems={setShoppingCartItems}
          setUnCheckedList={setUnCheckedList}
          unCheckedList={unCheckedList}
          removeFromCart={removeFromCart}
          disabled={disabled}
        />
        <S.ShoppingCartAside>
          <ShoppingCartSummary
            checkedItems={checkedItems}
            disabled={disabled}
          />
        </S.ShoppingCartAside>

        <S.ShoppingCartFooter>
          <ShoppingCartSummary
            checkedItems={checkedItems}
            disabled={disabled}
          />
        </S.ShoppingCartFooter>
      </div>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;

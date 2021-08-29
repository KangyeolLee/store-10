import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShoppingCategoryList from '.';
import { ICart } from '@/types';

export default {
  title: '컴포넌트/장바구니 리스트',
  component: ShoppingCategoryList,
} as ComponentMeta<typeof ShoppingCategoryList>;

const Template: ComponentStory<typeof ShoppingCategoryList> = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState<ICart[]>([]);
  const [unCheckedList, setUnCheckedList] = useState<number[]>([]);
  const checkedItems = shoppingCartItems.filter(
    (item) =>
      !unCheckedList.find((uncheckedId) => item.productId === uncheckedId)
  );

  const removeFromCart = (ids: number[]) => {
    const filteredItems = shoppingCartItems.filter(
      (item) => !ids.includes(item.productId)
    );

    setShoppingCartItems(filteredItems);
  };

  return (
    <ShoppingCategoryList
      shoppingCartItems={shoppingCartItems}
      checkedItems={checkedItems}
      setShoppingCartItems={setShoppingCartItems}
      setUnCheckedList={setUnCheckedList}
      unCheckedList={unCheckedList}
      removeFromCart={removeFromCart}
      disabled={false}
    />
  );
};

export const Default = Template.bind({});

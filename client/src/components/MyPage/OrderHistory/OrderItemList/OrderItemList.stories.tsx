import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { orderItemLists } from '@/dummies/orderHistory';

import OrderItemList from './';

export default {
  title: '컴포넌트/마이페이지/주문내역/아이템',
  component: OrderItemList,
} as ComponentMeta<typeof OrderItemList>;

const Template: ComponentStory<typeof OrderItemList> = (args) => (
  <OrderItemList {...args} />
);

const [key, value] = Object.entries(orderItemLists)[0];

export const Default = Template.bind({});
Default.args = {
  date: key,
  status: value.status,
  items: value.products,
};

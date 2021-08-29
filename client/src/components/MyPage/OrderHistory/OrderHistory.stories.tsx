import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OrderHistory from './OrderHistory';

export default {
  title: '페이지/마이페이지/주문내역',
  component: OrderHistory,
} as ComponentMeta<typeof OrderHistory>;

const Template: ComponentStory<typeof OrderHistory> = (args) => (
  <OrderHistory {...args} />
);

export const Default = Template.bind({});

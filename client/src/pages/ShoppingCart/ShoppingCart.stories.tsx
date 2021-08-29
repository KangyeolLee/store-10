import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShoppingCart from '.';

export default {
  title: '페이지/장바구니',
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = () => <ShoppingCart />;

export const Default = Template.bind({});

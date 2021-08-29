import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductExchange from './';

export default {
  title: '컴포넌트/상품상세/교환 및 반품안내',
  component: ProductExchange,
} as ComponentMeta<typeof ProductExchange>;

const Template: ComponentStory<typeof ProductExchange> = () => (
  <ProductExchange />
);

export const Default = Template.bind({});

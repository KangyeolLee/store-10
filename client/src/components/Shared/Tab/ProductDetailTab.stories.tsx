import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductDetailTab from './ProductDetailTab';

export default {
  title: '컴포넌트/공통/상품상세페이지탭',
  component: ProductDetailTab,
} as ComponentMeta<typeof ProductDetailTab>;

const Template: ComponentStory<typeof ProductDetailTab> = () => (
  <ProductDetailTab />
);

export const Default = Template.bind({});

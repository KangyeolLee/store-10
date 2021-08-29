import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductRequest from './';

export default {
  title: '컴포넌트/상품상세/상품문의',
  component: ProductRequest,
} as ComponentMeta<typeof ProductRequest>;

const Template: ComponentStory<typeof ProductRequest> = () => (
  <ProductRequest />
);

export const Default = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductDelivery from './';

export default {
  title: '컴포넌트/상품상세/배송안내',
  component: ProductDelivery,
} as ComponentMeta<typeof ProductDelivery>;

const Template: ComponentStory<typeof ProductDelivery> = () => (
  <ProductDelivery />
);

export const Default = Template.bind({});

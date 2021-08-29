import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductInfo from './';

export default {
  title: '컴포넌트/상품상세/상단정보',
  component: ProductInfo,
} as ComponentMeta<typeof ProductInfo>;

const Template: ComponentStory<typeof ProductInfo> = () => <ProductInfo />;

export const Default = Template.bind({});

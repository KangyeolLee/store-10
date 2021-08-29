import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductDescription from './';

export default {
  title: '컴포넌트/상품상세/상세정보',
  component: ProductDescription,
} as ComponentMeta<typeof ProductDescription>;

const Template: ComponentStory<typeof ProductDescription> = () => (
  <ProductDescription />
);

export const Default = Template.bind({});

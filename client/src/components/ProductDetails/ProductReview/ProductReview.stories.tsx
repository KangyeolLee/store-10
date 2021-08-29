import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductReview from './';

export default {
  title: '컴포넌트/상품상세/상품리뷰',
  component: ProductReview,
} as ComponentMeta<typeof ProductReview>;

const Template: ComponentStory<typeof ProductReview> = () => <ProductReview />;

export const Default = Template.bind({});

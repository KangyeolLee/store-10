import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductThumbnails from './ProductThumbnails';
import thumbnailsParser from '@/utils/thumbnailsParser';
import { thumbnails } from '@/dummies/mockThumbnails';

export default {
  title: '컴포넌트/상품상세/섬네일',
  component: ProductThumbnails,
} as ComponentMeta<typeof ProductThumbnails>;

const [thumbDetails, thumbOrigins, thumbThumbnails] =
  thumbnailsParser(thumbnails);

const Template: ComponentStory<typeof ProductThumbnails> = (args) => (
  <ProductThumbnails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thumbDetails,
  thumbOrigins,
  thumbThumbnails,
};

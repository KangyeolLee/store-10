import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewImageModal from './ReviewImageModal';

export default {
  title: '컴포넌트/공통/모달/리뷰이미지',
  component: ReviewImageModal,
} as ComponentMeta<typeof ReviewImageModal>;

const Template: ComponentStory<typeof ReviewImageModal> = (args) => (
  <ReviewImageModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selectedImage:
    'https://store-10.s3.ap-northeast-2.amazonaws.com/uploads/1629615559879_%ED%8E%B8%EC%95%88.jpg',
};

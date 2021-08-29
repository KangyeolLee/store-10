import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewUpdateModal from './ReviewUpdateModal';

export default {
  title: '컴포넌트/공통/모달/리뷰수정',
  component: ReviewUpdateModal,
} as ComponentMeta<typeof ReviewUpdateModal>;

const Template: ComponentStory<typeof ReviewUpdateModal> = (args) => (
  <ReviewUpdateModal {...args} />
);

export const Default = Template.bind({});

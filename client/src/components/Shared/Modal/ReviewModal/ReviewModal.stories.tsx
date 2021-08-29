import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewModal from './ReviewModal';

export default {
  title: '컴포넌트/공통/모달/리뷰작성',
  component: ReviewModal,
} as ComponentMeta<typeof ReviewModal>;

const Template: ComponentStory<typeof ReviewModal> = (args) => (
  <ReviewModal {...args} />
);

export const Default = Template.bind({});

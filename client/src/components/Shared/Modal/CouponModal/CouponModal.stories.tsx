import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CouponModal from './CouponModal';

export default {
  title: '컴포넌트/공통/모달/쿠폰',
  component: CouponModal,
} as ComponentMeta<typeof CouponModal>;

const Template: ComponentStory<typeof CouponModal> = (args) => (
  <CouponModal {...args} />
);

export const Default = Template.bind({});
Default.args = {};

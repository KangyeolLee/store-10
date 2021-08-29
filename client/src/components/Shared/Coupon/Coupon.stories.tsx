import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Coupon from './Coupon';

export default {
  title: '컴포넌트/공통/쿠폰',
  component: Coupon,
} as ComponentMeta<typeof Coupon>;

const Template: ComponentStory<typeof Coupon> = (args) => <Coupon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '우아한 COUPON',
  amount: 50,
  isValid: true,
};

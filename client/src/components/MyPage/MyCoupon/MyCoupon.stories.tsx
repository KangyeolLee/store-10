import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyCoupon from '.';

export default {
  title: '컴포넌트/마이페이지/쿠폰',
  component: MyCoupon,
} as ComponentMeta<typeof MyCoupon>;

const Template: ComponentStory<typeof MyCoupon> = () => <MyCoupon />;

export const Default = Template.bind({});

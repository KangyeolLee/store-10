import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageAside from '.';

export default {
  title: '컴포넌트/마이페이지/사이드바',
  component: MyPageAside,
} as ComponentMeta<typeof MyPageAside>;

const Template: ComponentStory<typeof MyPageAside> = (args) => (
  <MyPageAside {...args} />
);

export const Default = Template.bind({});

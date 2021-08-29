import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPage from '.';

export default {
  title: '페이지/마이페이지',
  component: MyPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MyPage>;

const Template: ComponentStory<typeof MyPage> = () => <MyPage />;

export const Default = Template.bind({});

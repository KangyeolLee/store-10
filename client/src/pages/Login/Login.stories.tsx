import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from './';

export default {
  title: '페이지/로그인',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const Default = Template.bind({});

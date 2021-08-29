import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './';

export default {
  title: '페이지/메인',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Default = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignUp from './';

export default {
  title: '페이지/회원가입',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = () => <SignUp />;

export const Default = Template.bind({});

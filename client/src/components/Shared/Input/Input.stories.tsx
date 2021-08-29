import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: '컴포넌트/공통/인풋',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  type: 'text',
  placeholder: '로그인',
  name: '인풋 이름',
  label: 'Standard',
};

export const Filled = Template.bind({});
Filled.args = {
  type: 'text',
  placeholder: '로그인',
  name: '인풋 이름',
  label: 'Filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: 'text',
  placeholder: '로그인',
  name: '인풋 이름',
  label: 'Outlined',
};

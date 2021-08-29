import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: '컴포넌트/공통/버튼',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  children: 'Button',
  color: 'primary',
  size: 'Large',
};

export const Black = Template.bind({});
Black.args = {
  type: 'button',
  children: 'Button',
  color: 'black',

  size: 'Large',
};

export const White = Template.bind({});
White.args = {
  type: 'button',
  children: 'Button',
  color: 'white',
  size: 'Large',
};

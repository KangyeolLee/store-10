import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LabelButton from '.';

export default {
  title: '컴포넌트/공통/라벨버튼',
  component: LabelButton,
} as ComponentMeta<typeof LabelButton>;

const Template: ComponentStory<typeof LabelButton> = (args) => (
  <LabelButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  children: '라벨 버튼',
};

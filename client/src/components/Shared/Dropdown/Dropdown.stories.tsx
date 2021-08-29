import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: '컴포넌트/공통/드랍다운',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      content: '수정하기',
      color: '#111',
      onClickListener: (target: number) => console.log(target),
    },
    {
      content: '삭제하기',
      color: '#f45452',
      onClickListener: (target: number) => console.log(target),
    },
  ],
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from '.';

export default {
  title: '컴포넌트/공통/타이틀',
  component: Title,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  level: 1,
  children: '제목',
};

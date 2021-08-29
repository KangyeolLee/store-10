import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chip from './';

export default {
  title: '컴포넌트/공통/칩',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = { children: '기본칩' };

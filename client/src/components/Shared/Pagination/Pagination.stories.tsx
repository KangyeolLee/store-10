import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './Pagination';

export default {
  title: '컴포넌트/공통/페이지네이션',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 5,
};

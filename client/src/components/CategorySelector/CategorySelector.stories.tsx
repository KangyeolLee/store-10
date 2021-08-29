import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategorySelector from './';

export default {
  title: '컴포넌트/카테고리셀렉터',
  component: CategorySelector,
} as ComponentMeta<typeof CategorySelector>;

const Template: ComponentStory<typeof CategorySelector> = (args) => (
  <CategorySelector {...args} />
);
export const Default = Template.bind({});

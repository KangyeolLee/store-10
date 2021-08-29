import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '.';

export default {
  title: '페이지/검색',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const Default = Template.bind({});

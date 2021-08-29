import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotFound from '.';

export default {
  title: '컴포넌트/404페이지',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <NotFound />;

export const Default = Template.bind({});

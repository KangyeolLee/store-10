import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from '.';

export default {
  title: '컴포넌트/공통/스피너',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

export default {
  title: '컴포넌트/공통/셀렉트',
  component: Select,
} as ComponentMeta<typeof Select>;

const items = [
  { value: 'hi', name: 'hello' },
  { value: 'hi2', name: 'hello2' },
  { value: 'hi3', name: 'hello3' },
  { value: 'hi4', name: 'hello4' },
];
const Template: ComponentStory<typeof Select> = () => <Select items={items} />;

export const Default = Template.bind({});

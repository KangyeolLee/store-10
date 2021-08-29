import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '.';

export default {
  title: '컴포넌트/공통/체크박스',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: '체크박스',
};

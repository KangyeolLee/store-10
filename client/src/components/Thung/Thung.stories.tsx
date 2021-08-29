import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Thung from './';

export default {
  title: '컴포넌트/텅',
  component: Thung,
} as ComponentMeta<typeof Thung>;

const Template: ComponentStory<typeof Thung> = (args) => <Thung {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '텅 컴포넌트 제목',
};

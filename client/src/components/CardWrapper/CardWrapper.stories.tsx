import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardWrapper from './';

export default {
  title: '컴포넌트/카드래퍼',
  component: CardWrapper,
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: [],
};

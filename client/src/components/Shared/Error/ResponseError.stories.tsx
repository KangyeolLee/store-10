import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResponseError from './ResponseError';

export default {
  title: '컴포넌트/공통/에러/에러창(컴포넌트단위)',
  component: ResponseError,
} as ComponentMeta<typeof ResponseError>;

const Template: ComponentStory<typeof ResponseError> = (args) => (
  <ResponseError {...args} />
);

export const Default = Template.bind({});

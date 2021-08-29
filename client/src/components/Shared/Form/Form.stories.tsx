import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from './Form';

export default {
  title: '컴포넌트/공통/문의모달 - Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});

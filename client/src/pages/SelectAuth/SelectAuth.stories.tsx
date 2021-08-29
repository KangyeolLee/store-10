import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectAuth from './';

export default {
  title: '페이지/인증선택',
  component: SelectAuth,
} as ComponentMeta<typeof SelectAuth>;

const Template: ComponentStory<typeof SelectAuth> = () => <SelectAuth />;

export const Default = Template.bind({});

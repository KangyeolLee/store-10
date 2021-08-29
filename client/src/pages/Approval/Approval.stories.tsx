import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Approval from './';

export default {
  title: '페이지/약관동의',
  component: Approval,
} as ComponentMeta<typeof Approval>;

const Template: ComponentStory<typeof Approval> = () => <Approval />;

export const Default = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paid from './Paid';

export default {
  title: '페이지/결제완료 ',
  component: Paid,
} as ComponentMeta<typeof Paid>;

const Template: ComponentStory<typeof Paid> = () => <Paid />;

export const Default = Template.bind({});

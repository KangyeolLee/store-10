import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Order from './Order';

export default {
  title: '페이지/주문결제 ',
  component: Order,
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = () => <Order />;

export const Default = Template.bind({});

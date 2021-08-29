import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeliveryModal from './DeliveryModal';

export default {
  title: '페이지/마이페이지/주문내역',
  component: DeliveryModal,
} as ComponentMeta<typeof DeliveryModal>;

const Template: ComponentStory<typeof DeliveryModal> = (args) => (
  <DeliveryModal {...args} />
);

export const Default = Template.bind({});

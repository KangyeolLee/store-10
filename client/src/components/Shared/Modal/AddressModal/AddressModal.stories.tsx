import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddressModal from './AddressModal';

export default {
  title: '컴포넌트/공통/모달/주소입력',
  component: AddressModal,
} as ComponentMeta<typeof AddressModal>;

const Template: ComponentStory<typeof AddressModal> = (args) => (
  <AddressModal {...args} />
);

export const Default = Template.bind({});

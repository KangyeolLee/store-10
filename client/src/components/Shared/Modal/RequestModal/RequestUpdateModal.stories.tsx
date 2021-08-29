import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RequestUpdateModal from './RequestUpdateModal';

export default {
  title: '컴포넌트/공통/모달/문의수정',
  component: RequestUpdateModal,
} as ComponentMeta<typeof RequestUpdateModal>;

const Template: ComponentStory<typeof RequestUpdateModal> = (args) => (
  <RequestUpdateModal {...args} />
);

export const Default = Template.bind({});

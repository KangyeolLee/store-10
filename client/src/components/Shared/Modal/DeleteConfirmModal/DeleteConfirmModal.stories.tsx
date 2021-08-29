import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeleteConfirmModal from './DeleteConfirmModal';

export default {
  title: '컴포넌트/공통/모달/삭제확인',
  component: DeleteConfirmModal,
} as ComponentMeta<typeof DeleteConfirmModal>;

const Template: ComponentStory<typeof DeleteConfirmModal> = (args) => (
  <DeleteConfirmModal {...args} />
);

export const Default = Template.bind({});

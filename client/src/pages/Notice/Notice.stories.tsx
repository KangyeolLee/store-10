import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Notice from './';

export default {
  title: '페이지/공지사항',
  component: Notice,
} as ComponentMeta<typeof Notice>;

const Template: ComponentStory<typeof Notice> = () => <Notice />;

export const Default = Template.bind({});

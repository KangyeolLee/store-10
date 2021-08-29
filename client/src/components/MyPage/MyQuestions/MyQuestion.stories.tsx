import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyQuestions from '.';

export default {
  title: '컴포넌트/마이페이지/문의탭',
  component: MyQuestions,
} as ComponentMeta<typeof MyQuestions>;

const Template: ComponentStory<typeof MyQuestions> = () => <MyQuestions />;

export const Default = Template.bind({});

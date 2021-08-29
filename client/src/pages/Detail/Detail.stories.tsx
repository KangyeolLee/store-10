import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Detail from './';

export default {
  title: '페이지/상품상세',
  component: Detail,
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = () => <Detail />;

export const Default = Template.bind({});

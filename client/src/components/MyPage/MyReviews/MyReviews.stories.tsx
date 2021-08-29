import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyReviews from '.';

export default {
  title: '컴포넌트/마이페이지/리뷰탭',
  component: MyReviews,
} as ComponentMeta<typeof MyReviews>;

const Template: ComponentStory<typeof MyReviews> = () => <MyReviews />;

export const Default = Template.bind({});

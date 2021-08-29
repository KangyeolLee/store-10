import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingChart from '.';
import { IRating } from '@/types';

export default {
  title: '컴포넌트/공통/별점차트',
  component: RatingChart,
} as ComponentMeta<typeof RatingChart>;

const ratings: IRating[] = [
  { rating: 5, count: '10' },
  { rating: 4, count: '9' },
  { rating: 3, count: '2' },
  { rating: 2, count: '0' },
  { rating: 1, count: '1' },
];

const Template: ComponentStory<typeof RatingChart> = (args) => (
  <RatingChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ratings,
};

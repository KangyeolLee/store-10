import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingGetter from './RatingGetter';

export default {
  title: '컴포넌트/공통/별점',
  component: RatingGetter,
} as ComponentMeta<typeof RatingGetter>;

const Template: ComponentStory<typeof RatingGetter> = (args) => (
  <RatingGetter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rating: 4.3,
  uniqueId: 'thisisuniqueId',
};

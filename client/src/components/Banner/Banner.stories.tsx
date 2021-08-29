import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from './';

export default {
  title: '컴포넌트/배너',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Default = Template.bind({});

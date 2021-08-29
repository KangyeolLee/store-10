import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardSkeleton from './';

export default {
  title: '컴포넌트/스켈레톤/카드',
  component: CardSkeleton,
} as ComponentMeta<typeof CardSkeleton>;

const Template: ComponentStory<typeof CardSkeleton> = () => <CardSkeleton />;

export const Default = Template.bind({});

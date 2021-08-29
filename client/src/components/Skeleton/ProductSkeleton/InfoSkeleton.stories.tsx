import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InfoSkeleton from './InfoSkeleton';

export default {
  title: '컴포넌트/스켈레톤/상품상세',
  component: InfoSkeleton,
} as ComponentMeta<typeof InfoSkeleton>;

const Template: ComponentStory<typeof InfoSkeleton> = () => <InfoSkeleton />;

export const Default = Template.bind({});

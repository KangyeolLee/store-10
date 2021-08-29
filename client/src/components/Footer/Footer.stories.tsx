import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './';

export default {
  title: '컴포넌트/푸터',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Vendor from './Vendor';

export default {
  title: '페이지/판매처안내',
  component: Vendor,
} as ComponentMeta<typeof Vendor>;

const Template: ComponentStory<typeof Vendor> = () => <Vendor />;

export const Default = Template.bind({});

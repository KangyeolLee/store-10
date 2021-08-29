import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CateogeyProducts from '.';

export default {
  title: '컴포넌트/카테고리 프로덕트',
  component: CateogeyProducts,
} as ComponentMeta<typeof CateogeyProducts>;

const Template: ComponentStory<typeof CateogeyProducts> = (arg) => (
  <CateogeyProducts {...arg} />
);

export const Default = Template.bind({});
Default.args = {
  subCategoryId: 1,
};

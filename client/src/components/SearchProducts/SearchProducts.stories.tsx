import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchProduct from '.';

export default {
  title: '컴포넌트/검색 프로덕트',
  component: SearchProduct,
} as ComponentMeta<typeof SearchProduct>;

const Template: ComponentStory<typeof SearchProduct> = (arg) => (
  <SearchProduct {...arg} />
);

export const Default = Template.bind({});
Default.args = {
  searchText: '카카오',
};

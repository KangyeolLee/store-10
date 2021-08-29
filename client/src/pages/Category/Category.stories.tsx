import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import categoryData from '@/dummies/mockCategoryData';
import categorylist from '@/dummies/mockCateogrys';
import { rest } from 'msw';

import Category from '.';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CategoryComponent = () => (
  <Suspense fallback={<div>loading</div>}>
    <Header />
    <Category />
    <Footer />
  </Suspense>
);

export default {
  title: '페이지/카테고리',
  component: CategoryComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = () => <CategoryComponent />;

export const Default = Template.bind({});

Default.parameters = {
  msw: [
    rest.get('/product/category/', (req, res, ctx) => {
      return res(ctx.json(categoryData));
    }),
    rest.get('/product/category-list/', (req, res, ctx) => {
      return res(ctx.json(categorylist));
    }),
  ],
};

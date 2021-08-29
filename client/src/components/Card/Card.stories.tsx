import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './';

export default {
  title: '컴포넌트/카드',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: 'primary',
  price: 30000,
  title: '또토리북 이녀석....!',
  src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg',
};

export const Another = Template.bind({});
Another.args = {
  bgColor: 'recommand',
  price: 30000,
  title: '또토리북 이녀석....!',
  src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg',
};

export const Discount50 = Template.bind({});
Discount50.args = {
  bgColor: 'best',
  discount: 50,
  price: 30000,
  title: '또토리북 이녀석....!',
  src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg',
};

export const Discount25 = Template.bind({});
Discount25.args = {
  bgColor: 'new',
  discount: 25,
  price: 30000,
  title: '또토리북 이녀석....!',
  src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg',
};

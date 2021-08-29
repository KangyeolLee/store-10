import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '.';

export default {
  title: '컴포넌트/공통/지연로딩-이미지',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://store-10.s3.ap-northeast-2.amazonaws.com/test/coupon.png',
  alt: '이미지 미리보기',
};

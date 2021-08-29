import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TermsOfPrivacy from './TermsOfPrivacy';

export default {
  title: '페이지/개인정보처리방침',
  component: TermsOfPrivacy,
} as ComponentMeta<typeof TermsOfPrivacy>;

const Template: ComponentStory<typeof TermsOfPrivacy> = () => (
  <TermsOfPrivacy />
);

export const Default = Template.bind({});

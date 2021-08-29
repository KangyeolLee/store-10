import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TermsOfUse from './TermsOfUse';

export default {
  title: '페이지/이용약관',
  component: TermsOfUse,
} as ComponentMeta<typeof TermsOfUse>;

const Template: ComponentStory<typeof TermsOfUse> = () => <TermsOfUse />;

export const Default = Template.bind({});

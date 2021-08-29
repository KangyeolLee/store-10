import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Error from './Error';

export default {
  title: '컴포넌트/공통/에러/에러창(공통)',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});

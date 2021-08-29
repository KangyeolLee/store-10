import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '.';
import { headers, items } from '../../../dummies/table';

export default {
  title: '컴포넌트/공통/테이블',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => (
  <Table headers={headers} items={items} />
);

export const Default = Template.bind({});

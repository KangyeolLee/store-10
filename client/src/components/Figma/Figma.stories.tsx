import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Figma from './';

export default {
  title: '피그마',
  decorators: [withDesign],
} as ComponentMeta<typeof Figma>;

const Template: ComponentStory<typeof Figma> = () => <Figma />;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5MMybhXMStHmeuarkV4YUk/Untitled?node-id=0%3A1',
  },
};

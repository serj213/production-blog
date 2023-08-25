import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { Header } from './Header';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  component: Header,
  args: {
    children: 'text',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LIGHT: Story = {
  args: {},
};

export const DARK: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.dark)],
};

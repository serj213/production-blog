import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { Button, EButtonTheme } from './Button';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'text',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const CLEAR: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.CLEAR,
  },
};

export const CLEAR_DARK: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(ETheme.dark)],
};

export const OUTLINE: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.OUTLINE,
  },
};

export const OUTLINE_DARK: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(ETheme.dark)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { Button, EButtonSize, EButtonTheme } from './Button';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: '>',
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

export const SIZE_M: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    size: EButtonSize.M,
  },
};

export const SIZE_L: Story = {
  args: {
    size: EButtonSize.L,
  },
};

export const SIZE_XL: Story = {
  args: {
    size: EButtonSize.XL,
  },
};

export const SQUARE_SIZE_L: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.OUTLINE,
    square: true,
    size: EButtonSize.L,
  },
};

export const SQUARE_SIZE_M: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.OUTLINE,
    square: true,
    size: EButtonSize.M,
  },
};

export const SQUARE_SIZE_XL: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EButtonTheme.OUTLINE,
    square: true,
    size: EButtonSize.XL,
  },
};

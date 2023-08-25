import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { AppLink, EThemeLink } from './AppLink';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AppLink> = {
  component: AppLink,
  args: {
    children: 'text',
    to: '/dfdf',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PRIMARY: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EThemeLink.PRIMARY,
  },
};

export const PRIMARY_DARK: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EThemeLink.PRIMARY,
  },
  decorators: [ThemeDecorator(ETheme.dark)],
};

export const SECONDARY: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EThemeLink.SECONDARY,
  },
};

export const SECONDARY_DARK: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EThemeLink.SECONDARY,
  },
  decorators: [ThemeDecorator(ETheme.dark)],
};

export const INVERTED_PRIMARY: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EThemeLink.INVERTED_PRIMARY,
  },
};

export const INVERTED_PRIMARY_DARK: Story = {
  args: {
    // 👇 The args you need here will depend on your component
    theme: EThemeLink.INVERTED_PRIMARY,
  },
  decorators: [ThemeDecorator(ETheme.dark)],
};

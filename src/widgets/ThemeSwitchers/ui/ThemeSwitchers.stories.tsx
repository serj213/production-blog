import type { Meta, StoryObj } from '@storybook/react';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { ThemeSwitchers } from './ThemeSwitchers';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ThemeSwitchers> = {
  component: ThemeSwitchers,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitchers>;

export const LIGHT: Story = {
  args: {},
};

export const DARK: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.dark)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { PageLoader } from './PageLoader';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PageLoader> = {
  component: PageLoader,
  args: {},
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const LIGHT: Story = {
  args: {},
};

export const DARK: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.dark)],
};

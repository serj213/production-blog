import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { PageError } from './PageError';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PageError> = {
  component: PageError,
  args: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const LIGHT: Story = {
  args: {},
};

export const DARK: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.dark)],
};

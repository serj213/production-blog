import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { LangSwithers } from './LangSwithers';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LangSwithers> = {
  component: LangSwithers,
  args: {},
};

export default meta;
type Story = StoryObj<typeof LangSwithers>;

export const LIGHT: Story = {
  args: {},
};

export const DARK: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.dark)],
};

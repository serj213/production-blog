import type { Preview } from '@storybook/react';
import '../../src/app/styles/app.scss';
import { RoutesDecorator } from 'shared/config/decorators/RoutesDecorador';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { ETheme, useTheme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const { theme } = useTheme();
      return (
        <div className={`app ${theme}`}>
          <Story />
        </div>
      );
    },
    ThemeDecorator(ETheme.light),
    RoutesDecorator(),
  ],
};

export default preview;

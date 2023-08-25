import { ETheme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme:ETheme) => (Story:any) => (
  <ThemeProvider>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

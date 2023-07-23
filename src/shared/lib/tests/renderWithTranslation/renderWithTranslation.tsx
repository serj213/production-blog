import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nTests from 'shared/config/i18n/i18n-test';

export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nTests}>
      {component}
    </I18nextProvider>,
  );
}

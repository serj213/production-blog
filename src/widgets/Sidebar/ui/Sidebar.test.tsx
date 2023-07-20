import { describe, expect, test } from '@jest/globals'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('sidebar tests', () => {
  test('have sidebar', () => {
    // eslint-disable-next-line i18next/no-literal-string
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('sidebar collapsed', () => {
    // eslint-disable-next-line i18next/no-literal-string
    renderWithTranslation(<Sidebar />)
    const btnToggle = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(btnToggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})

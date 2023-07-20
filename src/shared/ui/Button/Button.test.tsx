import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('button tests', () => {
  test('standart case', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('standart case', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

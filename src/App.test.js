import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders content', () => {
    const { getByText } = render(<App />)

    const content = getByText(
      'Hello world'
    )

    expect(content).toBeInTheDocument()
  })
})
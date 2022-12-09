import { render } from '@testing-library/react'
import App from './App'

test('Render', () => {
  const { getByText } = render(<App />)

  expect(getByText('Vite + React')).toBeTruthy()
})

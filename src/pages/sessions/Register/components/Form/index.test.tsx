import { render } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { Theme } from '@src/components'
import Form from '.'
const queryClient = new QueryClient()

const mockedUseSnackbar = jest.fn()
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => mockedUseSnackbar,
}))

const setup = () => {
  const wrapper = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Theme>
          <Form />
        </Theme>
      </BrowserRouter>
    </QueryClientProvider>,
  )

  return {
    wrapper,
  }
}

describe('Register Form', () => {
  it('Render name, username and password field correctly', () => {
    const {
      wrapper: { getByLabelText },
    } = setup()
    expect(getByLabelText('Nome')).toBeVisible()
    expect(getByLabelText('Usuário')).toBeVisible()
    expect(getByLabelText('Senha')).toBeVisible()
  })

  it('Render the Button submit correctly', () => {
    const {
      wrapper: { getByText },
    } = setup()
    expect(getByText('Registrar')).toBeVisible()
  })
})

import { render, RenderResult, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Header from '.'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { theme } from '@/themes'
import type { Product, User } from '@/types/data'

jest.mock('contexts/ShoppingCartContext')
const { ShoppingCartContextProvider } = jest.requireActual(
  'contexts/ShoppingCartContext',
)

const authUser: User = {
  id: 1,
  username: 'dummy',
  displayName: 'Sample User',
  email: 'test@example.com',
  profileImageUrl: '/images/1.jpg',
  description: '',
}

const product: Product = {
  id: 1,
  category: 'book',
  title: 'Product',
  description: '',
  imageUrl: '/images/1.jpg',
  blurDataUrl: '',
  price: 1000,
  condition: 'used',
  owner: authUser,
}

describe('Header', () => {
  let renderResult: RenderResult
  const useShoppingCartContextMock =
    useShoppingCartContext as jest.MockedFunction<typeof useShoppingCartContext>

  it('カートに商品が存在する', async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [product],
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addProductToCart: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeProductFromCart: () => {},
    })

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider
            authUser={authUser}
            context={{ apiRootUrl: 'https://dummy' }}
          >
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>,
    )

    expect(screen.getAllByTestId('badge-wrapper').length).toBeGreaterThan(0)

    renderResult.unmount()
    useShoppingCartContextMock.mockReset()
  })

  it('未サインイン', async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [],
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addProductToCart: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeProductFromCart: () => {},
    })

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider context={{ apiRootUrl: 'https://dummy' }}>
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('profile-shape-image')).toBeNull()

    expect(screen.queryByTestId('badge-wrapper')).toBeNull()

    renderResult.unmount()
    useShoppingCartContextMock.mockReset()
  })
})

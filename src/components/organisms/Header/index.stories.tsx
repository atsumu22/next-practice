import { Meta } from '@storybook/react'
import React, { useEffect } from 'react'
import Header from '.'
import { AuthContextProvider } from '@/contexts/AuthContext'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from '@/contexts/ShoppingCartContext'

export default { title: 'Organisms/Header' } as Meta<typeof Header>

export const NoLogin = () => <Header />

export const Login = () => {
  const authUser = {
    id: 1,
    username: 'dummy',
    displayName: 'Sample User',
    email: 'test@example.com',
    profileImageUrl: '/images/1.jpg',
    description: '',
  }

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext()

    useEffect(() => {
      addProductToCart({
        id: 1,
        category: 'book',
        title: 'Sample Book',
        description: '',
        imageUrl: '/images/1.jpg',
        blurDataUrl: '',
        price: 1000,
        condition: 'used',
        owner: authUser,
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Header />
  }

  return (
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: 'https://dummy' }}
        authUser={authUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  )
}

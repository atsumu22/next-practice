import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import AppLogo from '@/components/atoms/AppLogo'
import Button from '@/components/atoms/Button'
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/IconButton'
import ShapeImage from '@/components/atoms/ShapeImage'
import Spinner from '@/components/atoms/Spinner'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import BadgeIconButton from '@/components/molecules/BadgeIconButton'
import { useAuthContext } from '@/contexts/AuthContext'
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { theme } from '@/themes'

const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`

const NavLink = styled.span`
  display: inline;
`

const Anchor = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => {
  const { cart } = useShoppingCartContext()
  const { authUser, isLoading } = useAuthContext()

  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
        <Nav as="nav" height="36px" alignItems="center">
          <NavLink>
            <Link href="/" passHref>
              <Anchor>
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>

          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search" passHref>
                <Anchor>すべて</Anchor>
              </Link>
            </Box>
          </NavLink>

          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/clothes" passHref>
                <Anchor>トップス</Anchor>
              </Link>
            </Box>
          </NavLink>

          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/book" passHref>
                <Anchor>本</Anchor>
              </Link>
            </Box>
          </NavLink>

          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/shoes" passHref>
                <Anchor>シューズ</Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>

        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Box display={{ base: 'block', md: 'none' }}>
              <Link href="/search" passHref>
                <Anchor>
                  <SearchIcon />
                </Anchor>
              </Link>
            </Box>
          </NavLink>

          <NavLink>
            <Link href="/cart" passHref>
              <Anchor>
                <BadgeIconButton
                  icon={<ShoppingCartIcon size={24} />}
                  size="24px"
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor={theme.colors.primary}
                />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <Anchor>
                      <ShapeImage
                        shape="circle"
                        src={authUser.profileImageUrl}
                        width={24}
                        height={24}
                        alt="ユーザーアイコン"
                        data-testid="profile-shape-image"
                      />
                    </Anchor>
                  </Link>
                )
              } else if (isLoading) {
                return <Spinner size={20} strokeWidth={2} />
              } else {
                return (
                  <Link href="/signin" passHref>
                    <Anchor>
                      <PersonIcon size={24} />
                    </Anchor>
                  </Link>
                )
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href="/sell" passHref>
              <Button>出品</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  )
}

export default Header

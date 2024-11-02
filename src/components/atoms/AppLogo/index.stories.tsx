import { Meta } from '@storybook/react'
import React from 'react'
import AppLogo from '.'

export default { title: 'Atoms/AppLogo' } as Meta<typeof AppLogo>

export const Logo = () => <AppLogo />

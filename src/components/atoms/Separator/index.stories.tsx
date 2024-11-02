import { Meta } from '@storybook/react'
import React from 'react'
import Separator from '.'

export default { title: 'Atoms/Separator' } as Meta<typeof Separator>

export const Standard = () => (
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>
)

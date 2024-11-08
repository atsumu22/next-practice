import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import Spinner from '.'

export default {
  title: 'Atoms/Spinner',
  argTypes: {
    size: {
      control: { type: 'number' },
      defaultValue: 50,
      description: 'サイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    strokeWidth: {
      control: { type: 'number' },
      defaultValue: 4,
      description: '先の太さ',
      table: {
        type: { summary: 'number' },
      },
    },
    isAutoCentering: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'センタリングフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof Spinner>

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1199;
`

const Template: StoryFn<typeof Spinner> = (args) => (
  <SpinnerWrapper>
    <Spinner {...args} />
  </SpinnerWrapper>
)

export const Normal = Template.bind({})

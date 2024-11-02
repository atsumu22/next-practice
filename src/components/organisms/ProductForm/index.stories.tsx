import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ProductForm from '.'

export default {
  title: 'Organisms/ProductForm',
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof ProductForm>

const Template: StoryFn<typeof ProductForm> = (args) => (
  <ProductForm {...args} />
)

export const Form = Template.bind({})

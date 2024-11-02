import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import CheckBox from '.'

export default {
  title: 'Molecules/CheckBox',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'ラベル',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'text' },
      description: 'チェック',
      table: {
        type: { summary: 'number' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof CheckBox>

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = { label: 'Label' }

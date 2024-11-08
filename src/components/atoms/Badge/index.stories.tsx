import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Badge from '.'

export default {
  title: 'Atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />

export const Orange = Template.bind({})
Orange.args = { content: '1', backgroundColor: '#ed9f28' }

export const Green = Template.bind({})
Green.args = { content: '2', backgroundColor: '#32bf00' }

export const Red = Template.bind({})
Red.args = { content: '3', backgroundColor: '#d4001a' }

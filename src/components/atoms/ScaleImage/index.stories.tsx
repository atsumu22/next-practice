import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ScaleImage from '.'

export default {
  title: 'Atoms/ScaleImage',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '画像の横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '画像の縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    containerWidth: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    containerHeight: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof ScaleImage>

const Template: StoryFn<typeof ScaleImage> = (args) => <ScaleImage {...args} />

export const Normal = Template.bind({})
Normal.args = {
  src: '/images/1.jpg',
}

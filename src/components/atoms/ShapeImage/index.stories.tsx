import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ShapeImage from './index'

export default {
  title: 'Atoms/ShapeImage',
  component: ShapeImage,
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'square | circle' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像のURL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof ShapeImage>

const Template: StoryFn<typeof ShapeImage> = (args) => <ShapeImage {...args} />

export const Circle = Template.bind({})
Circle.args = { src: '/images/1.jpg', shape: 'circle', width: 320, height: 320 }

export const Square = Template.bind({})
Square.args = { src: '/images/1.jpg', shape: 'square', width: 320, height: 320 }

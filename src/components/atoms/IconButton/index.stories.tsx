import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './'

export default {
  title: 'Atoms/IconButton',
  component: SearchIcon,
  argTypes: {
    color: {
      control: { type: 'text' },
      description: 'アイコンの色',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof SearchIcon>

const Template: StoryFn<typeof SearchIcon> = (args) => (
  <>
    <SearchIcon {...args} />
    <CloudUploadIcon {...args} />
    <PersonOutlineIcon {...args} />
  </>
)

export const Normal = Template.bind({})

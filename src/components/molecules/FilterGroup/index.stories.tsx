import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'
import FilterGroup from './index'

export default {
  title: 'Molecules/FilterGroup',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'object' },
      description: 'オプション',
      table: {
        type: { summary: 'object[]' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof FilterGroup>

const Template: StoryFn<typeof FilterGroup> = (args) => {
  const [value, setValue] = useState<string[]>([])
  const handleChange = (value: string[]) => {
    setValue(value)
    args && args.onChange && args.onChange(value)
  }

  return <FilterGroup value={value} onChange={handleChange} {...args} />
}

export const Standard = Template.bind({})
Standard.args = {
  title: 'All categories',
  items: [
    { label: 'Clothes', name: 'clothes' },
    { label: 'Books', name: 'books' },
    { label: 'Shoes', name: 'shoes' },
  ],
}

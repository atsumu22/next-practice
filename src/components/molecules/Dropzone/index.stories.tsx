import { Meta, StoryFn } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import Dropzone from '.'
import Button from '@/components/atoms/Button'
import Box from '@/components/layout/Box'

export default {
  title: 'Molecules/Dropzone',
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      control: { type: 'object' },
      description: '受け付けるファイルタイプ',
      table: {
        type: { summary: 'object[]' },
      },
    },
    onDrop: {
      description: 'ファイルがドロップ入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: 'ファイルが入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Dropzone>

const Template: StoryFn<typeof Dropzone> = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const handleDrop = (files: File[]) => {
    setFiles(files)
    args && args.onDrop && args.onDrop(files)
  }

  const fetchData = async () => {
    const res = await fetch('/images/1.jpg')
    const blob = await res.blob()
    const file = new File([blob], '1.jpg', blob)

    setFiles([...files, file])
  }

  const clearImages = () => {
    setFiles([])
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>画像を追加</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>全ての画像をクリア</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          //eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        ))}
      </Box>
    </>
  )
}

export const WidthControl = Template.bind({})
WidthControl.args = {
  width: '100%',
  height: 200,
  acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  hasError: false,
}

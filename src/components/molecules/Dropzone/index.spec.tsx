import { render, fireEvent, RenderResult, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import DropZone from '.'
import { theme } from '@/themes'

describe('DropZone', () => {
  let renderResult: RenderResult
  let handleDrop: jest.Mock

  beforeEach(() => {
    handleDrop = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <DropZone onDrop={handleDrop} />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDropが呼ばれる', async () => {
    const element = await screen.findByTestId('dropzone')
    fireEvent.drop(element, {
      dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    })

    expect(handleDrop).toHaveBeenCalledTimes(1)
  })
})

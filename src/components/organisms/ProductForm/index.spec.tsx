import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ProductForm from '.'
import { theme } from '@/themes'

describe('ProductForm', () => {
  let renderResult: RenderResult
  let handleProductSave: jest.Mock
  global.URL.createObjectURL = () => 'https://test.com'

  beforeEach(() => {
    handleProductSave = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <ProductForm onProductSave={handleProductSave} />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('フォーム入力後、onProductSaveが呼ばれる', async () => {
    await act(async () => {
      const element = await screen.findByTestId('dropzone')
      fireEvent.drop(element, {
        dataTransfer: {
          files: [
            new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
          ],
        },
      })

      const inputProductnameNode = screen.getByPlaceholderText(
        /商品のタイトル/,
      ) as HTMLInputElement
      fireEvent.change(inputProductnameNode, { target: { value: '商品' } })

      const inputDescriptionNode = screen.getByPlaceholderText(
        /最高の商品です/,
      ) as HTMLInputElement
      fireEvent.change(inputDescriptionNode, {
        target: { value: '商品の説明' },
      })

      const inputPriceNode = screen.getByPlaceholderText(
        /100/,
      ) as HTMLInputElement
      fireEvent.change(inputPriceNode, { target: { value: '2000' } })

      fireEvent.click(screen.getByText('出品'))
    })

    expect(handleProductSave).toHaveBeenCalledTimes(1)
  })

  it('商品タイトル入力だけでは、バリデーションエラーとなりonProductSaveが呼ばれない', async () => {
    await act(async () => {
      const inputProductnameNode = screen.getByPlaceholderText(
        /商品のタイトル/,
      ) as HTMLInputElement
      fireEvent.change(inputProductnameNode, { target: { value: '商品' } })

      fireEvent.click(screen.getByText('出品'))
    })

    expect(handleProductSave).toHaveBeenCalledTimes(0)
  })
})

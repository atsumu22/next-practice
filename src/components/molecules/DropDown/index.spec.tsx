import {
  render,
  screen,
  act,
  fireEvent,
  RenderResult,
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Dropdown from '.'
import { theme } from '@/themes'

describe('Dropdown', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    handleChange = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropdown
          options={[
            { value: 'used', label: '中古' },
            { value: 'new', label: '新品' },
          ]}
          onChange={handleChange}
        />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('プルダウンが開き、プルダウンオプションが選択されたらonChangeが呼ばれる', async () => {
    // プルダウンを開く動きをシミュレーション
    await act(async () => {
      const element = await screen.findByTestId('dropdown-control')
      element && fireEvent.mouseDown(element)
    })

    // 開いたプルダウンから最初のオプションを選択する
    const elements = await screen.getAllByTestId('dropdown-option')
    elements && fireEvent.click(elements[0])

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})

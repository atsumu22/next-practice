import { Meta } from '@storybook/react'
import React from 'react'
import GlobalSpinner from '.'
import Button from '@/components/atoms/Button'
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from '@/contexts/GlobalSpinnerContext'

export default {
  title: 'Organisms/GlobalSpinner',
} as Meta<typeof GlobalSpinner>

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    )
  }

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}

import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Text from '@/components/atoms/Text'
import Flex from '@/components/layout/Flex'

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`

const DropdownControl = styled.div<{ hasError?: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.colors.danger}`
      : `1px solid ${theme.colors.border}`};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
`

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`

const DropdownArrow = styled.div<{ isOpen?: boolean }>`
  border-color: ${({ isOpen }) =>
    isOpen
      ? 'transparent transparent #222222;'
      : '#222222 transparent transparent;'};
  border-width: ${({ isOpen }) => (isOpen ? '0 5px 5px' : '5px 5px 0;')};
  border-style: solid;
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 16px;
  width: 0;
`

const DropdownMenu = styled.div`
  background-color: #ffffff;
  border: ${({ theme }) => theme.colors.border};
  box-shadow:
    0px 5px 5px -3px rgb(0 00/ 20%),
    0px 8px 10px 1px rgb(0 00/ 10%),
    0px 3px 14px 2px rgb(0 00/ 12%);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`

const DropdownMenuOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`

interface DropdownItemProps {
  item: DropdownItem
}

const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props

  return (
    <Flex alignItems="center">
      <Text margin={0} variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  )
}

export interface DropdownItem {
  value: string | number | null
  label?: string
}

interface DropdownProps {
  options: DropdownItem[]
  value?: string | number
  name?: string
  placeholder?: string
  hasError?: boolean
  onChange?: (selected?: DropdownItem) => void
}

const Dropdown = (props: DropdownProps) => {
  const { onChange, name, options, hasError } = props
  const initialItem = options.find((i) => i.value === props.value)
  const [isOpen, setIsOpenValue] = useState(false)
  const [selectedItem, setSelectedItem] = useState(initialItem)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current) {
        const elms = dropdownRef.current.querySelectorAll('*')

        for (let i = 0; i < elms.length; i++) {
          if (elms[i] == e.target) {
            return
          }
        }
      }

      setIsOpenValue(false)
    },
    [dropdownRef],
  )

  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue((isOpen) => !isOpen)
    e.stopPropagation()
  }

  const handleSelectValue = (
    e: React.FormEvent<HTMLDivElement>,
    item: DropdownItem,
  ) => {
    e.stopPropagation()

    setSelectedItem(item)
    setIsOpenValue(false)
    onChange && onChange(item)
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, false)
    document.addEventListener('touchend', handleDocumentClick, false)

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false)
      document.removeEventListener('touchend', handleDocumentClick, false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DropdownRoot ref={dropdownRef}>
      <DropdownControl
        hasError={hasError}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseDown}
        data-testid="dropdown-control"
      >
        {selectedItem && (
          <DropdownValue>
            <DropdownItem item={selectedItem} />
          </DropdownValue>
        )}
        {!selectedItem && (
          <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
        )}
        <input
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ''}
          onChange={() => onChange && onChange(selectedItem)}
        />
        <DropdownArrow isOpen={isOpen} />
      </DropdownControl>
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, idx) => (
            <DropdownMenuOption
              key={idx}
              onMouseDown={(e) => handleSelectValue(e, item)}
              onClick={(e) => handleSelectValue(e, item)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={item} />
            </DropdownMenuOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  )
}

export default Dropdown

import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows?: number
  maxRows?: number
  hasError?: boolean
}

const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
  color: ${({ theme }) => theme.colors.inputText};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.danger : theme.colors.border};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 9px 12px 10px 12px;
  resize: none;
  overflow: auto;
  height: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

const TextArea = (props: TextAreaProps) => {
  const {
    rows = 5,
    minRows = 5,
    maxRows = 10,
    children,
    hasError,
    onChange,
    ...rest
  } = props
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

  console.assert(
    !(rows < minRows),
    'TextArea: rows should be greater than minRows',
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24
      const previousRows = e.target.rows

      e.target.rows = minRows

      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

      if (currentRows === previousRows) {
        e.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
      }

      setTextareaRows(currentRows < maxRows ? currentRows : maxRows)
      onChange && onChange(e)
    },
    [onChange, minRows, maxRows],
  )

  return (
    <StyledTextArea
      hasError={hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  )
}

// TextArea.defaultProps = {
//   rows: 5,
//   minRows: 5,
//   maxRows: 10,
// }

export default TextArea

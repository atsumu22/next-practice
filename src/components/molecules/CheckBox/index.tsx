import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from '@/components/atoms/IconButton'
import Text from '@/components/atoms/Text'
import Flex from '@/components/layout/Flex'

// 特定のプロパティ`defaultValue`を取り除いた上で、label?: string型を定義している。
// Omit<Type, Keys>はTypeScript のユーティリティ型で、指定された型から特定のプロパティ（この場合は 'defaultValue'）を除外するもの。
// 今回のinput要素はtype="checkbox"での使用が想定されるため、defaultValueは不要。そのためこれを除外している。
// その上で、propsとして受け入れるlabelの型を定義している。
// extends Omit ... を使用して型を拡張しているので型宣言ではinterfaceを用いる。
export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  label?: string
}

// デフォルトHTMLのtype="checkbox"のinput要素ではブラウザごとに見た目が異なる。
// この見た目をカスタマイズするために、まずはdisplay: noneを設定している。
// そして非表示にしたinput要素をDOM要素として
const CheckBoxElement = styled.input`
  display: none;
`

const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`

const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props
  const [isChecked, setIsChecked] = useState(checked)
  // useRefを使ってDOM要素を操作できるようにする。`ref.current.イベントハンドラ`の形で実行可能。
  const ref = useRef<HTMLInputElement>(null)
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      ref.current?.click()
      setIsChecked((isChecked) => !isChecked)
    },
    [ref, setIsChecked],
  )

  useEffect(() => {
    setIsChecked(checked ?? false)
  }, [checked])

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        type="checkbox"
        checked={isChecked}
        readOnly={!onChange}
        onChange={onChange}
      />
      <Flex alignItems="center">
        {(checked ?? isChecked) ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <Text>{label}</Text>
          </Label>
        )}
      </Flex>
    </>
  )
}

export default CheckBox

import React from 'react'
import styled from 'styled-components'
import Badge from '@/components/atoms/Badge'
import { Color } from '@/utils/styles'

const BadgeIconButtonWrapper = styled.span<{ size: number | string }>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const BadgeWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: -10px;
`

type BadgeIconButtonProps = {
  icon: React.ReactNode
  badgeContent?: number
  badgeBackgroundColor: Color
  size?: number | string
}

/**
 * バッジ付きアイコンボタン
 */
const BadgeIconButton = ({
  icon,
  size = '24px',
  badgeContent,
  badgeBackgroundColor,
}: BadgeIconButtonProps) => {
  return (
    <BadgeIconButtonWrapper size={size}>
      {icon}
      {badgeContent && (
        <BadgeWrapper data-testid="badge-wrapper">
          <Badge
            content={`${badgeContent}`}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconButtonWrapper>
  )
}

export default BadgeIconButton

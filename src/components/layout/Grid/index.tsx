/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from '@/components/layout/Box'
import { CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRpw, Responsive } from '@/types/styles'
import { toPropValue } from '@/utils/styles'

type GridProps = BoxProps & {
  gridGap?: Responsive<string>
  gridColumnGap?: Responsive<string>
  gridRowGap?: Responsive<string>
  gridColumn?: Responsive<CSSPropertyGridColumn>
  gridRow?: Responsive<CSSPropertyGridRpw>
  gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>
  gridAutoColumns?: Responsive<string>
  gridAutoRows?: Responsive<string>
  gridTemplateColumns?: Responsive<string>
  gridTemplateRows?: Responsive<string>
  gridTemplateAreas?: Responsive<CSSPropertyGridArea>
  gridArea?: Responsive<string>
}

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${(props) => toPropValue('grid-gap', props.gridGap, props.theme)}
  ${(props) => toPropValue('grid-column-gap', props.gridColumnGap, props.theme)}
  ${(props) => toPropValue('grid-row-gap', props.gridRowGap, props.theme)}
  ${(props) => toPropValue('grid-row', props.gridRow, props.theme)}
  ${(props) => toPropValue('grid-column', props.gridColumn, props.theme)}
  ${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme)}
  ${(props) => toPropValue('grid-auto-columns', props.gridAutoColumns, props.theme)}
  ${(props) => toPropValue('grid-auto-rows', props.gridAutoRows, props.theme)}
  ${(props) => toPropValue('grid-template-columns', props.gridTemplateColumns, props.theme)}
  ${(props) => toPropValue('grid-template-rows', props.gridTemplateRows, props.theme)}
  ${(props) => toPropValue('grid-template-areas', props.gridTemplateAreas, props.theme)}
  ${(props) => toPropValue('grid-area', props.gridArea, props.theme)}
`

// この書き方は非推奨
// Grid.defaultProps = {
//   display: 'grid',
// }

export default Grid

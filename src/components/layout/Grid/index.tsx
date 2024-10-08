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
  girdAutoColumns?: Responsive<string>
  girdAutoRows?: Responsive<string>
  girdTemplateColumns?: Responsive<string>
  girdTemplateRows?: Responsive<string>
  girdTemplateAreas?: Responsive<CSSPropertyGridArea>
  girdArea?: Responsive<string>
}

const Grid = styled(Box)<GridProps>`
  ${(props) => toPropValue('grid-gap', props.gridGap, props.theme)}
  ${(props) => toPropValue('grid-column-gap', props.gridColumnGap, props.theme)}
  ${(props) => toPropValue('grid-row-gap', props.gridRowGap, props.theme)}
  ${(props) => toPropValue('grid-row', props.gridRow, props.theme)}
  ${(props) => toPropValue('grid-column', props.gridColumn, props.theme)}
  ${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme)}
  ${(props) => toPropValue('grid-auto-columns', props.girdAutoColumns, props.theme)}
  ${(props) => toPropValue('grid-auto-rows', props.girdAutoRows, props.theme)}
  ${(props) => toPropValue('grid-template-columns', props.girdTemplateColumns, props.theme)}
  ${(props) => toPropValue('grid-template-rows', props.girdTemplateRows, props.theme)}
  ${(props) => toPropValue('grid-template-areas', props.girdTemplateAreas, props.theme)}
  ${(props) => toPropValue('grid-area', props.girdArea, props.theme)}
`

Grid.defaultProps = {
  display: 'grid',
}

export default Grid

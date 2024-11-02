import React from 'react'
import ContentLoader from 'react-content-loader'
import { IContentLoaderProps } from 'react-content-loader/native'

interface RectLoaderProps extends IContentLoaderProps {
  width: number
  height: number
}

const RectLoader = ({ width, height, ...rest }: RectLoaderProps) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...rest}
  >
    <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
  </ContentLoader>
)

export default RectLoader

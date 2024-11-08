import Image, { ImageProps } from 'next/image'
import React from 'react'
import styled from 'styled-components'

export type ImageShape = 'circle' | 'square'
export type ShapeImageProps = ImageProps & { shape?: ImageShape }

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props

  return <ImageWithShape shape={shape} {...imageProps} />
}

export default ShapeImage

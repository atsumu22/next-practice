import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes/index'
import * as NextImage from 'next/image'

export const parameters = {
  // actions: { /* argTypesRegex を削除 */ },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
html, body, textarea {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  transition: .25s;
  color: #000000;
}
`

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

const CustomNextImage = (props) => <NextImage {...props} unoptimized />

// const OriginalNextImage = NextImage.default;

// NextImage.default =(props) => <OriginalNextImage {...props} unoptimized />
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

export const tags = ['autodocs'];

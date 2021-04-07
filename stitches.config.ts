import { createCss } from '@stitches/react'

export const { styled, css, theme, getCssString } = createCss({
  theme: {
    colors: {
      test: 'red',
    },
  },
})

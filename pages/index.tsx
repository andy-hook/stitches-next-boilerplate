import React from 'react'

import { styled } from '../stitches.config'

function Home(): JSX.Element {
  return <Button>Hello world</Button>
}

const Button = styled('button', {
  backgroundColor: '$test',
})

export default Home

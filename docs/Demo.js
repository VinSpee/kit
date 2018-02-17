import React from 'react'
import {
  Provider,
  Library,
  Example,
  XRay,
  Frame,
} from '../src'

const Demo = props => (
  <Provider
    fontFamily='"Roboto Mono", monospace'
    color='#236'
  >
    <Library>
      <Library.Nav />
      <Example name='h1'>
        <XRay>
          <h1>hello</h1>
        </XRay>
      </Example>
      <Example name='button'>
        <Frame>
          <button>hello</button>
        </Frame>
      </Example>
    </Library>
  </Provider>
)

export default Demo

'use strict'

import { Provider, styled } from 'styletron-react'
import React from 'react'

const Example = styled('div', {
  background: 'black',
  opacity: .9,
  color: 'white'
})

export default () =>
  <Provider value={{
    renderStyle: () => {}
  }}>
    <Example>Hallo Planetoid!</Example>
  </Provider>
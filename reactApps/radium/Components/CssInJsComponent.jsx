'use strict'

import Radium from 'radium'
import React from 'react'

@Radium
class CssInJssComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div style={[
        styles.example
      ]}>
        Hallo Planetoid!
      </div>
    )
  }
}

const styles = {
  example: {
    background: 'black',
    opacity: .9,
    color: 'white'
  }
}

export default CssInJssComponent
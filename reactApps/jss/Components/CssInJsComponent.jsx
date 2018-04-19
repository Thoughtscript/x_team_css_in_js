'use strict'

import jss from 'jss'
import React from 'react'

const styles = {
  example: {
    background: 'black',
    opacity: .9,
    color: 'white'
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

export default () => <div className={classes.example}>Hallo Planetoid!</div>
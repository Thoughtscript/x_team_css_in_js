'use strict'

/**
 *  CssInJssComponent container.
 */

import { StyleSheet, css } from 'aphrodite';
import React from 'react'

const styles = new StyleSheet.create({
  example: {
    background: 'black',
    opacity: .9,
    color: 'white'
  }
})

export default () => <div className={css(styles.example)}>Hallo Planetoid!</div>
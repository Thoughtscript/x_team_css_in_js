'use strict'

/**
 *  CssInJssComponent container.
 */

import {css} from 'emotion'
import React from 'react'

const Example = css`
    background: black;
    opacity: .9;
    color: white;
`
export default () => <div className={Example}>Hallo Planetoid!</div>
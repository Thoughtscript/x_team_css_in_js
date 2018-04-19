'use strict'

/**
 *  Router.
 */

import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import CssInJssComponent from './CssInJsComponent'

export default () =>
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={'/'} component={CssInJssComponent}/>
      </Switch>
    </div>
  </BrowserRouter>
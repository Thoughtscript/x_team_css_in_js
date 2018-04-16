'use strict'

/**
 *  Router.
  */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CssInJssComponent from './CssInJssComponent'

export default () =>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path={"/"} component={CssInJssComponent}/>
      </Switch>
    </div>
  </BrowserRouter>
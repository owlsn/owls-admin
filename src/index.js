
import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import PcHotRoute from './pc/configs/router'
import MobileHotRoute from './mobile/configs/router'
import MobileConfigure from './mobile/middleware'
import PcConfigure from './pc/middleware'
import './pc/styles/index.css'
import './mobile/sytles/index.css'

const isMobile = require('is-mobile')

ReactDOM.render(
  <Provider store={isMobile() ? MobileConfigure(): PcConfigure()}>
    {isMobile() ? <MobileHotRoute />: <PcHotRoute />}
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

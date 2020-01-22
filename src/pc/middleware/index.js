
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import logger from './logger'
import crashReporter from './reporter'

const middleware = [ thunk ]
const nextReducer = require('../reducers')

export default function PcConfigure(initialState) {

  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    ...middleware,
    crashReporter
  )(create)

  const store = createStoreWithMiddleware(reducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

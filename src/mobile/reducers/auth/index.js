import { handleActions } from 'redux-actions'
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../../constants/actions'

export default handleActions(
  new Map([
    [
      LOGIN ,
      (state, action) => ({
        ...state,
        fetching : true
      })
    ],
    [
      LOGIN_FAIL ,
      (state, action) => ({
        ...state,
        fetching : false,
        invalidate : true,
        err : action.err
      })
    ],
    [
      LOGIN_SUCCESS ,
      (state, action) => ({
        ...state,
        fetching : false,
        invalidate : false,
        ret : action.ret,
        lastUpdateAt : ""
      })
    ]
  ]),
  {
    fetching : false,
    err : {},
    ret : {},
    lastUpdateAt : ""
  }
)

import {LOGIN} from '../constants'

const initialState = {
  name: 'huhaoran',
  isLogin: false
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin
      }
      break;
    default:
      return state;
  }
}

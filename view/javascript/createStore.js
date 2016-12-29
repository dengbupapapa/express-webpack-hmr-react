import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import rootReducer from 'sReducers/index';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import DevTools from './devTools';

const enhancer = compose(
  //你要使用的中间件，放在前面
  applyMiddleware(thunk, promiseMiddleware),
  //必须的！启用带有monitors（监视显示）的DevTools
  DevTools.instrument()

)

export default initialState => {
  //注意：仅仅只有redux>=3.1.0支持第三个参数
  let store;

  if (process.env.NODE_ENV == 'development') {
    store = createStore(rootReducer, initialState, enhancer);
  } else {
    store = createStore(rootReducer, initialState);
  }

  //热替换选项
  if (module.hot) {
    module.hot.accept('sReducers/index', () => {
      const nextReducer = require('sReducers/index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store

}
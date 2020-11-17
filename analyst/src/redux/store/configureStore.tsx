/*
 * @Author: your name
 * @Date: 2020-08-14 12:49:05
 * @LastEditTime: 2020-08-14 13:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redBook/my-app/src/redux/store/configureStore.ts
 */
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {logger} from '../middleware';
import rootReducer from '../reducers';

const nextReducer = require('../reducers');

function configure(initialState: any) {
  // const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    logger,
  )(createStore);

  const store =  createStoreWithMiddleware(rootReducer,initialState);

  // if(module.hot) {
  //   module.hot.accept('../reducers',() => {
  //     store.replaceReducer(nextReducer);
  //   })
  // }
  return store;
}

export default configure;
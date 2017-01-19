/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { createStore, applyMiddleware } from 'redux';

import { app, addUserEpic } from './reducers';

import { appFetchingUser } from './actions';

let store = createStore(app, applyMiddleware(addUserEpic));

store.dispatch(appFetchingUser());

export default store;

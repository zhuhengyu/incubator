/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { userReducers, rootUserEpic } from './reducers/user';
import { appFetchingUser } from './actions/user';

const app = combineReducers(Object.assign({}, userReducers));
const rootEpic = combineEpics(
  rootUserEpic
);
const rootEpicMiddleware = createEpicMiddleware(rootEpic);

let store = createStore(app, applyMiddleware(rootEpicMiddleware));

store.dispatch(appFetchingUser());

export default store;

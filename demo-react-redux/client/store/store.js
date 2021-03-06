/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import { userReducers, rootUserEpic } from './reducers/user';
import { editFormReducers } from './reducers/editForm';

const app = combineReducers(
  Object.assign({
    form: reduxFormReducer,
    routing: routerReducer
  }, {
    users: userReducers,
    editForm: editFormReducers
  })
);

const rootEpic = combineEpics(
  rootUserEpic
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootEpicMiddleware = createEpicMiddleware(rootEpic);

let store = createStore(app, composeEnhancers(applyMiddleware(rootEpicMiddleware)));

export default store;
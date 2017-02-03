/**
 * Created by 欧阳 超 on 2017/01/22
 */

import { combineReducers } from 'redux-immutable';
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as _ACTIONS from '../actions/editForm';

const userEditForm = handleActions({
  [_ACTIONS.LOAD_USER_EDIT_FORM]: (state, action) => Map(action.payload),
  [_ACTIONS.CLEAR_USER_EDIT_FORM]: () => Map({ id: '', name: '', age: 0 }),
}, Map({}));

export const editFormReducers = combineReducers({
  userEditForm,
});
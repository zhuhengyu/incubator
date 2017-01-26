/**
 * Created by 欧阳 超 on 2017/01/22
 */

import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import * as _ACTIONS from '../actions/editForm';

const editForm = handleActions({
  [_ACTIONS.LOAD_USER_EDIT_FORM]: (state, action) => state.set('userForm', fromJS(action.payload)),
  [_ACTIONS.CLEAR_USER_EDIT_FORM]: state => state.set('userForm', fromJS({})),
}, fromJS({ userForm: {} }));

export const editFormReducers = { editForm };

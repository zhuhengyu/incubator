/**
 * Created by 欧阳 超 on 2017/01/22
 */

import { handleAction } from 'redux-actions';

import { LOAD_USER_EDIT_FORM } from '../actions/editForm';

const editForm = handleAction(
  LOAD_USER_EDIT_FORM,
  (state, action) => (state.userForm = action.payload) && state,
  { userForm: {} }
);

export const editFormReducers = { editForm };

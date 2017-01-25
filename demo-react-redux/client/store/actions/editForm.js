/**
 * Created by 欧阳 超 on 2017/01/22
 */

import { createAction } from 'redux-actions';

export const LOAD_USER_EDIT_FORM = 'LOAD_USER_EDIT_FORM';

export const loadUserEditForm = createAction(LOAD_USER_EDIT_FORM, user => user);

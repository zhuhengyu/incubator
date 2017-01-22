/**
 * Created by 欧阳 超 on 2017/01/22
 */

export const LOAD_USER_EDIT_FORM = 'LOAD_USER_EDIT_FORM';
export const CLEAR_USER_EDIT_FORM = 'CLEAR_USER_EDIT_FORM';

export const loadUserEditForm = (user) => {
  return Object.assign({}, {
    type: LOAD_USER_EDIT_FORM,
  }, { user });
};
export const clearUserEditForm = () => {
  return Object.assign({}, {
    type: CLEAR_USER_EDIT_FORM,
  });
};
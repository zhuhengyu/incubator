/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';

import {
  appFetchingUser,
  appAddingUser,
  appDeletingUser,
  appModifyingUser
} from '../../store/actions/user';
import { loadUserEditForm, clearUserEditForm } from '../../store/actions/editForm';
import UserModule from './UserModule';

const mapStateToProps = state => {
  let editFormInitData = state.editForm.toJS().userEditForm;
  editFormInitData.age = +editFormInitData.age;
  let users = state.users.toJS();
  users.list.forEach(user => user.age = + user.age);
  return {
    users,
    editFormInitData,
  };
};

const mapDispatchToProps = dispatch => ({
  handleUserAdd: user => dispatch(appAddingUser(user)),
  handleUserDelete: id => dispatch(appDeletingUser(id)),
  handleLoadEditForm: user => dispatch(loadUserEditForm(user)),
  handleResetEditForm: () => dispatch(clearUserEditForm()),
  handleUserEdit: user => dispatch(appModifyingUser(user)),
  fetchUserList: page => dispatch(appFetchingUser(page)),
});

const UserModuleContainer = connect(mapStateToProps, mapDispatchToProps)(UserModule);

export default UserModuleContainer;

/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';
import $ from 'jquery';

import {
  appFetchingUser,
  appAddingUser,
  appDeletingUser,
  appModifyingUser,
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
  handleUserAdd: user => $('#addUserForm').modal('hide') && dispatch(appAddingUser(user)),
  handleUserDelete: id => dispatch(appDeletingUser(id)),
  handleLoadEditForm: user => $('#editUserForm').modal('show') && dispatch(loadUserEditForm(user)),
  handleResetEditForm: () => $('#editUserForm').modal('hide') && dispatch(clearUserEditForm()),
  handleUserEdit: user => $('#editUserForm').modal('hide') && dispatch(appModifyingUser(user)),
  fetchUserList: page => dispatch(appFetchingUser(page)),
});

const UserModuleContainer = connect(mapStateToProps, mapDispatchToProps)(UserModule);

export default UserModuleContainer;

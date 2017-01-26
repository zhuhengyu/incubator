/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';

import { appAddingUser, appDeletingUser, appModifyingUser } from '../../store/actions/user';
import { loadUserEditForm } from '../../store/actions/editForm';
import UserModule from './UserModule';

const mapStateToProps = state => {
  let editFormInitData = state.editForm.get('userForm').toJS();
  editFormInitData.age = +editFormInitData.age;
  let userList = state.users.toJS();
  userList.forEach(user => user.age = + user.age);
  return {
    userList,
    editFormInitData,
  };
};

const mapDispatchToProps = dispatch => ({
  handleUserAdd: user => dispatch(appAddingUser(user)),
  handleUserDelete: id => dispatch(appDeletingUser(id)),
  handleLoadEditForm: user => dispatch(loadUserEditForm(user)),
  handleResetEditForm: () => dispatch(appModifyingUser({})),
  handleUserEdit: user => dispatch(appModifyingUser(user)),
});

const UserModuleContainer = connect(mapStateToProps, mapDispatchToProps)(UserModule);

export default UserModuleContainer;

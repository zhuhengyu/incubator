/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';

import { appAddingUser, appDeletingUser, appModifyingUser } from '../../store/actions/user';
import { loadUserEditForm } from '../../store/actions/editForm';
import UserModule from './UserModule';

const mapStateToProps = (state) => {
  return {
    userList: state.users,
    editFormInitData: state.editForm.userForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserAdd: (user) => {
      dispatch(appAddingUser(user));
    },
    handleUserDelete: (id) => {
      dispatch(appDeletingUser(id));
    },
    handleLoadEditForm: (user) => {
      dispatch(loadUserEditForm(user));
    },
    handleResetEditForm: () => {
      dispatch(loadUserEditForm({}));
    },
    handleUserEdit: (user) => {
      dispatch(appModifyingUser(user));
    },
  };
};

const UserModuleContainer = connect(mapStateToProps, mapDispatchToProps)(UserModule);

export default UserModuleContainer;

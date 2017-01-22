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
    handleUserDelete: (idx) => {
      dispatch(appDeletingUser(idx));
    },
    handleLoadEditForm: (user) => {
      dispatch(loadUserEditForm(user));
    },
    handleResetEditForm: () => {
      dispatch(loadUserEditForm({}));
    },
    handleUserModify: (idx, user) => {
      dispatch(appModifyingUser(idx, user));
    },
  };
};

const UserModuleContainer = connect(mapStateToProps, mapDispatchToProps)(UserModule);

export default UserModuleContainer;

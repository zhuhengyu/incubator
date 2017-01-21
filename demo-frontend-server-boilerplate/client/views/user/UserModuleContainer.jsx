/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';

import { appAddingUser, appDeletingUser, appLoadUserModifier, appModifyingUser } from '../../store/actions/user';
import UserModule from './UserModule';

const mapStateToProps = (state) => {
  return {
    userList: state.users,
    modifyIdx: state.appUsers.modifyIdx,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserAdd: (user) => {
      dispatch(appAddingUser(user));
    },
    onUserDelete: (idx) => {
      dispatch(appDeletingUser(idx));
    },
    onLoadModifier: (idx) => {
      dispatch(appLoadUserModifier(idx));
    },
    onModifyCancel: () => {
      dispatch(appLoadUserModifier(-1));
    },
    onUserModify: (idx, user) => {
      dispatch(appModifyingUser(idx, user));
    },
  };
};

const UserModuleContainer = connect(mapStateToProps, mapDispatchToProps)(UserModule);

export default UserModuleContainer;

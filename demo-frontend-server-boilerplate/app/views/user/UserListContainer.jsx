/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';

import { appAddingUser, appDeletingUser } from '../../store/actions';
import UserList from './UserList';

const mapStateToProps = (state) => {
  return { userList: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserAdd: (user) => {
      dispatch(appAddingUser(user));
    },
    onUserDelete: (id) => {
      dispatch(appDeletingUser(id));
    }
  };
};

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;

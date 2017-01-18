/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { connect } from 'react-redux';

import { addUser, deleteUser } from '../../store/actions';
import UserList from './UserList';

const mapStateToProps = (state) => {
  return { userList: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserDelete: (id) => {
      dispatch(deleteUser(id));
    },
    onUserAdd: (user) => {
      dispatch(addUser(user));
    }
  };
};

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;

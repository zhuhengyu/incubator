/**
 * Created by 欧阳 超 on 2017/01/16
 */

import {
  connect,
} from 'react-redux';

import {
  deleteUser,
} from '../../store/actions';
import UserList from './UserList';

const mapStateToProps = (state) => {
  return {
    userlist: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserDelete: (id) => {
      dispatch(deleteUser(id));
    }
  };
};

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);

export default UserListContainer;

/**
 * Created by ouyangcharles on 2017/01/10.
 */
import React from 'react';

import UserProfile from './profile/UserProfile';
import AddUser from './add/AddUser';

import './UserList.sass';

const UserList = (props) => {
  const {
    userList,
    onUserDelete,
    onUserAdd
  } = props;
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {userList.map((user, idx) => {
            return (<UserProfile
              key={idx}
              name={user.name}
              age={user.age}
              onDelete={() => onUserDelete(idx)} />);
          })}
        </tbody>
      </table>
      <hr />
      <AddUser onAdd={onUserAdd} />
    </div>
  );
};

UserList.propTypes = {
  userList: React
    .PropTypes
    .arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      age: React.PropTypes.number.isRequired
    })),
  onUserDelete: React.PropTypes.func.isRequired,
  onUserAdd: React.PropTypes.func.isRequired
};

export default UserList;

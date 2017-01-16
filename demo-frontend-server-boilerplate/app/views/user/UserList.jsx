/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

import UserProfile from './UserProfile';

import './UserList.sass';

const UserList = (props) => {
  const {
    userlist,
    onUserDelete,
  } = props;
  return (
    <div className="userlist">
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </thead> 
        <tbody>
          {
            userlist.map((user, idx) => {
              return (<UserProfile key={idx}
                id={user.id}
                name={user.name}
                age={user.age}
                onDelete={() => onUserDelete(user.id)}/>);
            })
          }
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  userlist: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      age: React.PropTypes.number.isRequired,
    })
  ),
  onUserDelete: React.PropTypes.func.isRequired,
};

export default UserList;


/**
 * Created by ouyangcharles on 2017/01/10.
 */
import React from 'react';

import Add from './add/Add';
import List from './list/List';

import './UserModule.sass';

const UserModule = props => {
  const {
    userList,
    onUserDelete,
    onUserAdd
  } = props;
  return (
    <div>
      <List list={userList} onUserDelete={onUserDelete} />
      <hr />
      <Add onAdd={onUserAdd} />
    </div>
  );
};

UserModule.propTypes = {
  userList: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired
  }).isRequired).isRequired,
  onUserDelete: React.PropTypes.func.isRequired,
  onUserAdd: React.PropTypes.func.isRequired
};

export default UserModule;

/**
 * Created by ouyangcharles on 2017/01/10.
 */
import React from 'react';

import List from './list/List';
import Add from './add/Add';
import Modify from './modify/Modify';

import './UserModule.sass';

const UserModule = props => {
  const {
    userList,
    modifyIdx,
    onUserAdd,
    onUserDelete,
    onUserModify,
    onModifyCancel,
    onLoadModifier,
  } = props;
  return (
    <div>
      <h1>
        User Admin
      </h1>
      <hr />
      <List list={userList} onUserDelete={onUserDelete} onLoadModifier={onLoadModifier} />
      <hr />
      <Add onAdd={onUserAdd} />
      <hr />
      <Modify list={userList} modifyIdx={modifyIdx} onModify={onUserModify} onCancel={onModifyCancel} />
    </div>
  );
};

UserModule.propTypes = {
  userList: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired
  }).isRequired).isRequired,
  modifyIdx: React.PropTypes.number.isRequired,
  onUserAdd: React.PropTypes.func.isRequired,
  onUserDelete: React.PropTypes.func.isRequired,
  onUserModify: React.PropTypes.func.isRequired,
  onModifyCancel: React.PropTypes.func.isRequired,
  onLoadModifier: React.PropTypes.func.isRequired,
};

export default UserModule;

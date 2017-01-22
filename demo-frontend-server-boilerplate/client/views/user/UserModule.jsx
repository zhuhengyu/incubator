/**
 * Created by ouyangcharles on 2017/01/10.
 */
import React from 'react';

import AddForm from './form/AddForm';
import EditForm from './form/EditForm';
import List from './list/List';

import './UserModule.sass';

const UserModule = props => {
  const {
    userList,
    editFormInitData,
    handleUserAdd,
    handleUserDelete,
    handleLoadEditForm,
    handleResetEditForm,
    handleUserEdit,
    // handleFormCancel,
    // handleLoad,
  } = props;
  return (
    <div>
      <h1>
        User Admin
      </h1>
      <hr />
      <List list={userList} handleUserDelete={handleUserDelete} handleLoadEditForm={handleLoadEditForm} />
      <hr />
      <AddForm onSubmit={() => { handleUserAdd(); } } />
      <hr />
      <EditForm
        initialValues={editFormInitData}
        onSubmit={() => { handleUserEdit(); } }
        onReset={() => { handleResetEditForm(); } } />
    </div>
  );
};

UserModule.propTypes = {
  // STATEs:
  // user list data
  userList: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired
  }).isRequired).isRequired,
  // user data to be editing
  editFormInitData: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
  }),
  // FUNCTIONs:
  // handle adding
  handleUserAdd: React.PropTypes.func.isRequired,
  // handle deleting
  handleUserDelete: React.PropTypes.func.isRequired,
  // handle modifying
  handleUserEdit: React.PropTypes.func.isRequired,
  // reset form
  handleResetEditForm: React.PropTypes.func.isRequired,
  // load data to form
  handleLoadEditForm: React.PropTypes.func.isRequired,
};

export default UserModule;

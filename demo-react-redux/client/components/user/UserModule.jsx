/**
 * Created by 欧阳 超 on 2017/01/10.
 */
import React from 'react';

import AddForm from './form/AddForm';
import EditForm from './form/EditForm';
import List from './list/List';

const UserModule = props => {
  const {
    userList,
    editFormInitData,
    handleUserAdd,
    handleUserDelete,
    handleLoadEditForm,
    handleResetEditForm,
    handleUserEdit,
  } = props;
  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="page-header">
            User Admin
          </h3>
        </div>
      </div>
      <List list={userList} handleUserDelete={handleUserDelete} handleLoadEditForm={handleLoadEditForm} />
      <AddForm onSubmit={handleUserAdd} />
      <EditForm
        initialValues={editFormInitData}
        onSubmit={handleUserEdit}
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
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    age: React.PropTypes.number,
  }).isRequired,
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

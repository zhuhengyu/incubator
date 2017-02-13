/**
 * Created by 欧阳 超 on 2017/01/10.
 */
import React, { PropTypes } from 'react';

import Spinner from '../common/Spinner';
import AddForm from './form/AddForm';
import EditForm from './form/EditForm';
import List from './list/List';

const UserModule = props => {
  const {
    users,
    editFormInitData,
    handleUserAdd,
    handleUserDelete,
    handleLoadEditForm,
    handleResetEditForm,
    handleUserEdit,
    fetchUserList,
  } = props;
  return users.ui.fetchingUser ?
    (
      <div className="page-wrapper">
        <div style={{ height: '100%', width: '100%', }}>
          <Spinner />
        </div>
      </div>
    ) : (
      <div className="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
              User Admin
          </h3>
          </div>
        </div>
        <List users={users} handleUserDelete={handleUserDelete}
          handleLoadEditForm={handleLoadEditForm} fetchUserList={fetchUserList} />
        <AddForm onSubmit={handleUserAdd} />
        <EditForm
          initialValues={editFormInitData}
          onSubmit={handleUserEdit}
          onReset={() => { handleResetEditForm(); }} />
      </div>
    );
};

UserModule.propTypes = {
  // STATEs:
  // user list data and info
  users: PropTypes.shape(PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })).isRequired,
    listInfo: PropTypes.shape({
      count: PropTypes.number.isRequired,
      curPage: PropTypes.number.isRequired,
      perPage: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  // user data to be editing
  editFormInitData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
  // ui state
  ui: PropTypes.shape({
    fetchingUser: PropTypes.bool.isRequired,
  }).isRequired,
  // FUNCTIONs:
  // handle adding
  handleUserAdd: PropTypes.func.isRequired,
  // handle deleting
  handleUserDelete: PropTypes.func.isRequired,
  // handle modifying
  handleUserEdit: PropTypes.func.isRequired,
  // reset form
  handleResetEditForm: PropTypes.func.isRequired,
  // load data to form
  handleLoadEditForm: PropTypes.func.isRequired,
  // fetch user list
  fetchUserList: PropTypes.func.isRequired,
};

export default UserModule;

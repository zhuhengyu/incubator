/**
 * Created by 欧阳 超 on 2017/01/20
 */

import React from 'react';

import Profile from '../profile/Profile';
import Pagination from './Pagination';

const List = props => {
  const {
    users: {
      list,
      listInfo: {
        count,
        curPage,
        perPage,
      },
      ui: {
        fetchingUser,
      },
    },
    handleUserDelete,
    handleLoadEditForm,
    fetchUserList,
  } = props;
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            User List
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-12">
                <table className="table table-bordered table-striped table-hover table-less-margin-bottom">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map(user => {
                      return (<Profile
                        key={user.id}
                        name={user.name}
                        age={user.age}
                        onDelete={() => handleUserDelete(user.id)}
                        onLoadEditForm={() => handleLoadEditForm(user)} />);
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <row>
              <Pagination count={count} curPage={curPage}
                perPage={perPage} fetchUserList={fetchUserList} isFetchingUser={fetchingUser} />
            </row>
          </div>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  // user list data and info
  users: React.PropTypes.shape(
    React.PropTypes.shape({
      list: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired,
      })).isRequired,
      listInfo: React.PropTypes.shape({
        count: React.PropTypes.number,
        curPage: React.PropTypes.number,
        perPage: React.PropTypes.number,
      }).isRequired,
    }).isRequired
  ),
  handleUserDelete: React.PropTypes.func.isRequired,
  handleLoadEditForm: React.PropTypes.func.isRequired,
  fetchUserList: React.PropTypes.func.isRequired,
};

export default List;

/**
 * Created by 欧阳 超 on 2017/01/20
 */

import React from 'react';

import Profile from '../profile/Profile';

const List = props => {
  const {
    list,
    handleUserDelete,
    handleLoadEditForm,
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
              <div className="col-sm-6 footnote">Showing 1 to 10 of 57 entries</div>
              <div className="col-sm-6"></div>
            </row>
          </div>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
  }).isRequired).isRequired,
  handleUserDelete: React.PropTypes.func.isRequired,
  handleLoadEditForm: React.PropTypes.func.isRequired,
};

export default List;

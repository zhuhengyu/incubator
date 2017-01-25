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
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
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
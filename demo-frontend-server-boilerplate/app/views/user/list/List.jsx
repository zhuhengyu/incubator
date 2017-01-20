/**
 * Created by 欧阳 超 on 2017/01/20
 */
import React from 'react';

import Profile from '../profile/Profile';

const List = props => {
  const {
    list,
    onUserDelete,
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
          {list.map((user, idx) => {
            return (<Profile
              key={idx}
              name={user.name}
              age={user.age}
              onDelete={() => onUserDelete(idx)} />);
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
  onUserDelete: React.PropTypes.func.isRequired,
};

export default List;
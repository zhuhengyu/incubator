/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

const UserProfile = (props) => {
  const {
    id,
    name,
    age,
    onDelete,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td><a href="javascript:;" onClick={onDelete}>Delete</a></td>
    </tr>
  );
};

UserProfile.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default UserProfile;

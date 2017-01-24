/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

const Profile = (props) => {
  const {
    name,
    age,
    onDelete,
    onLoadEditForm,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <a href="javascript:;" onClick={onDelete}>Delete</a>
        &nbsp;|&nbsp;
        <a href="javascript:;" onClick={onLoadEditForm}>Modify</a>
      </td>
    </tr>
  );
};

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onLoadEditForm: React.PropTypes.func.isRequired,
};

export default Profile;

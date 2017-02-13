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
        <a href="javascript:;" onClick={onLoadEditForm}>
          <span className="glyphicon glyphicon-edit"></span>
        </a>
        &nbsp;|&nbsp;
        <a href="javascript:;" onClick={onDelete}>
          <span className="glyphicon glyphicon-remove"></span>
        </a>
      </td>
    </tr>
  );
};

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onLoadEditForm: React.PropTypes.func.isRequired,
};

export default Profile;

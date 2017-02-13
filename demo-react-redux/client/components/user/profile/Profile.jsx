/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';
import swal from 'sweetalert2';

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
        <a href="javascript:;" onClick={
          () => {
            swal({
              title: 'Are you sure?',
              text: 'You won\'t be able to revert this!',
              type: 'warning',
              showCancelButton: true,
              width: '400px',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Delete'
            }).then(onDelete);
          }
        }>
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

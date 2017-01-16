/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

const Profile = (props) => {
  const {
    id,
    name,
    age,
  } = props;
  return (
    <div className="memo">
      {id} | {name} | {age}
    </div>
  );
};

Profile.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.string.isRequired,
};

export default Profile;


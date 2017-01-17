/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

const AddUser = (props) => {
  let nameRef;
  let ageRef;
  const {
    onAdd,
  } = props;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        onAdd({
          name: nameRef.value,
          age: ageRef.value,
        });
      }}>
        <input ref={ _ => nameRef = _ } type="text"/><br/>
        <input ref={ _ => ageRef = _ } type="number"/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

AddUser.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};

export default AddUser;

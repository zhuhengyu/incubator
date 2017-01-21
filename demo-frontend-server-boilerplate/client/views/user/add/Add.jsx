/**
 * Created by 欧阳 超 on 2017/01/10.
 */
import React from 'react';

const Add = (props) => {
  let nameRef;
  let ageRef;
  const {
    onAdd
  } = props;
  return (
    <div>
      <h2>Add User</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          onAdd({ name: nameRef.value, age: ageRef.value });
        } }>
        <input ref={_ => nameRef = _} type="text" /><br />
        <input ref={_ => ageRef = _} type="number" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Add.propTypes = {
  onAdd: React.PropTypes.func.isRequired
};

export default Add;

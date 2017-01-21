/**
 * Created by 欧阳 超 on 2017/01/20
 */

import React from 'react';

import './Modify.sass';

const Modify = props => {
  let nameRef;
  let ageRef;
  const {
    list,
    modifyIdx,
    onModify,
    onCancel,
  } = props;
  let curUser = modifyIdx > -1 ? list[modifyIdx] : { name: '', age: 0 };
  return (
    <div className={modifyIdx > -1 ? 'modifying' : 'modifying-over'}>
      <h2>Modify User</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          onModify(modifyIdx, { name: nameRef.value, age: ageRef.value });
        } }>
        <input ref={_ => nameRef = _} type="text" value={curUser.name} />
        <br />
        <input ref={_ => ageRef = _} type="number" value={curUser.age} />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

Modify.propTypes = {
  list: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
  }),
  modifyIdx: React.PropTypes.number.isRequired,
  onModify: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default Modify;
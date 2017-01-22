/**
 * Created by 欧阳 超 on 2017/01/22
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

let EditForm = props => {
  const {
    onSubmit,
    onReset,
  } = props;
  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={onSubmit} onReset={onReset}>
        <Field name="id" component="input" type="hidden" />
        <div>
          <label>Name: </label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label>Age: </label>
          <Field name="age" component="input" type="number" />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  // user info to be loaded into form
  // user: React.PropTypes.shape({
  //   id: React.PropTypes.string.isRequired,
  //   name: React.PropTypes.string.isRequired,
  //   age: React.PropTypes.number.number.isRequired,
  // }),
  // on submit event handler
  onSubmit: React.PropTypes.func.isRequired,
  // handle event handler
  onReset: React.PropTypes.func.isRequired,
};

EditForm = reduxForm({
  form: 'userEditForm',
  enableReinitialize: true,
})(EditForm);

export default EditForm;
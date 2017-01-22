/**
 * Created by 欧阳 超 on 2017/01/21
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddForm = props => {
  const {
    handleSubmit,
  } = props;
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
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
        </div>
      </form>
    </div>
  );
};

AddForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

AddForm = reduxForm({
  form: 'userAddForm',
})(AddForm);

export default AddForm;
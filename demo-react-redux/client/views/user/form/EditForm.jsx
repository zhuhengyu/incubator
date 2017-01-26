/**
 * Created by 欧阳 超 on 2017/01/22
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './EditForm.sass';

let EditForm = props => {
  const {
    initialValues,
    handleSubmit,
    onReset,
  } = props;
  return (
    <div className={initialValues.id ? 'editing' : 'editingFinished'}>
      <h4>Edit User</h4>
      <form onSubmit={handleSubmit} onReset={onReset}>
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
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  // need to check if initialized
  initialValues: React.PropTypes.object,
  // on submit event handler
  handleSubmit: React.PropTypes.func.isRequired,
  // handle event handler
  onReset: React.PropTypes.func.isRequired,
};

EditForm = reduxForm({
  form: 'userEditForm',
  enableReinitialize: true,
})(EditForm);

export default EditForm;
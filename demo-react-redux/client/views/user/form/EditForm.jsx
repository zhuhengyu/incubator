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
    <div className={`row ${initialValues.id ? 'editing' : 'editingFinished'}`}>
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            Edit User
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-12">
                <form role="form" onSubmit={handleSubmit} onReset={onReset}>
                  <Field name="id" component="input" type="hidden" />
                  <div className="form-group">
                    <label>Name</label>
                    <Field className="form-control" name="name" component="input" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Age: </label>
                    <Field className="form-control" name="age" component="input" type="number" />
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <button className="btn btn-default" type="reset">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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

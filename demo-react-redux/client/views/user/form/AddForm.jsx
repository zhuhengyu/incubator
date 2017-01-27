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
    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            Add User
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-12">
                <form role="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <Field className="form-control" name="name" component="input" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Age: </label>
                    <Field className="form-control" name="age" component="input" type="number" />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
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

AddForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

AddForm = reduxForm({
  form: 'userAddForm',
})(AddForm);

export default AddForm;
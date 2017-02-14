/**
 * Created by 欧阳 超 on 2017/01/21
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField, { required, isInt } from './common/RenderField';

let AddForm = props => {
  const {
    handleSubmit,
  } = props;
  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUserForm">
        Add User
      </button>
      <div id="addUserForm" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <form role="form" onSubmit={handleSubmit}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="gridSystemModalLabel">Add User</h4>
              </div>
              <div className="modal-body">
                <Field className="form-control" name="name" type="text" label="Name" component={RenderField} validate={[required]} />
                <Field className="form-control" name="age" type="text" label="Age" component={RenderField} validate={[required, isInt]} />
              </div>
              <div className="modal-footer">
                <div>
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              </div>
            </form>
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
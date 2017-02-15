/**
 * Created by 欧阳 超 on 2017/01/22
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField, { required, isWorkingAge, isEmail } from '../../common/RenderField';

let EditForm = props => {
  const {
    handleSubmit,
    onReset,
  } = props;
  return (
    <div>
      <div id="editUserForm" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <form role="form" onSubmit={handleSubmit} onReset={onReset}>
              <Field name="id" component="input" type="hidden" />
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="gridSystemModalLabel">Edit User</h4>
              </div>
              <div className="modal-body">
                <Field name="name" type="text" label="Name" component={RenderField} validate={[required]} />
                <Field name="email" type="text" label="Email" component={RenderField} validate={[required, isEmail]} />
                <Field name="age" type="text" label="Age" component={RenderField} validate={[required, isWorkingAge]} />
              </div>
              <div className="modal-footer">
                <div>
                  <button className="btn btn-primary" type="submit">Submit</button>
                  <button className="btn btn-default" type="reset">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditForm.propTypes = {
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

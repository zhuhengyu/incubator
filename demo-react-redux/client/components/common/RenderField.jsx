/**
 * Created by 欧阳 超 on 2017/02/14
 */

import React, { PropTypes } from 'react';
import validator from 'validator';

const RenderField = props => {
  const {
    input,
    label,
    type,
    meta: {
      touched,
      error,
      warning
    }
  } = props;
  const hasError = error || warning;
  return (<div className={`form-group ${touched ? (hasError ? 'has-error' : 'has-success') + ' has-feedback' : ''}`}>
    <label className="control-label">{label}</label>
    <input className="form-control" {...input} placeholder={label} type={type} />
    {
      touched ? (hasError ?
        (
          <span className="glyphicon glyphicon-warning-sign form-control-feedback"></span>
        ) : (
          <span className="glyphicon glyphicon-ok form-control-feedback"></span>
        )
      ) : ''
    }
    {
      touched && hasError ? (
        <div className="help-block">{error || warning}</div>
      ) : ''
    }
  </div>);
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};

export default RenderField;

export const required = value => value ? undefined : 'Required';
export const isEmail = value => {
  value += '';
  return validator.isEmail(value) ? undefined : 'Invalid email';
};
export const isInt = value => {
  value += '';
  return validator.isInt(value, {
    min: 18,
    max: 60,
  }) ? undefined : 'Integer needed, betwwen 18 and 60';
};
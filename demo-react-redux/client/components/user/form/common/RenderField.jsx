/**
 * Created by 欧阳 超 on 2017/02/14
 */

import React, { PropTypes } from 'react';

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
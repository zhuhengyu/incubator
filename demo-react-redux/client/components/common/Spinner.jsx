/**
 * Created by 欧阳 超 on 2017/02/12
 */

import React, { PropTypes } from 'react';

const Spinner = props => {
  let {
    isInline,
    size,
  } = props;
  isInline = isInline || false;
  size = size || 16;
  return isInline ?
    (
      <i className="fa fa-refresh fa-spin" style={{ fontSize: size }}></i>
    ) : (
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 'calc(50% - 40px)', left: 'calc(50% - 25px)' }}>
          <i className="fa fa-refresh fa-spin" style={{ fontSize: size }}></i>
        </div>
      </div >
    );
};

Spinner.propTypes = {
  isInline: PropTypes.bool,
  size: PropTypes.number,
};

export default Spinner;
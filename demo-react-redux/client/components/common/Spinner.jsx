/**
 * Created by 欧阳 超 on 2017/02/12
 */

import React from 'react';

const Spinner = () => {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 'calc(50% - 40px)', left: 'calc(50% - 25px)' }}>
        <i className="fa fa-refresh fa-spin" style={{ fontSize: 50 }}></i>
      </div>
    </div>
  );
};

React.propTypes = {};

export default Spinner;
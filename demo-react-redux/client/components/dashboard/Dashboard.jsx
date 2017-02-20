/**
 * Created by 欧阳 超 on 2017/01/26
 */

import React from 'react';

import Spinner from '../common/Spinner';

const Dashboard = () => (
  <div className="my-page-wrapper-for-sidebar">
    <div style={{ height: '100%', width: '100%', }}>
      <Spinner isInline={false} size={50} />
    </div>
  </div>
);

Dashboard.propTypes = {};

export default Dashboard;

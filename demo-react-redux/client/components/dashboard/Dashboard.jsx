/**
 * Created by 欧阳 超 on 2017/01/26
 */

import React from 'react';

import Spinner from '../common/Spinner';

const Dashboard = () => (
  <div className="page-wrapper">
    <div className="row">
      <div className="col-lg-12">
        <h3 className="page-header">
          Dashboard
        </h3>
      </div>
      <div className="col-lg-12">
        <Spinner />
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {};

export default Dashboard;

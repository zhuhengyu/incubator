/**
 * Created by 欧阳 超 on 2017/01/26
 */

import React from 'react';
import { Link } from 'react-router';

const SideBar = () => (
  <div className="navbar-default sidebar" role="navigation">
    <div className="sidebar-nav navbar-collapse">
      <ul className="nav in" id="side-menu">
        <li className="active">
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  </div>
);

SideBar.propTypes = {};

export default SideBar;
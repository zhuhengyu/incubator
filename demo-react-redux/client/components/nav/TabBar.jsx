/**
 * Created by 欧阳 超 on 2017/02/15
 */

import React from 'react';
import { Link } from 'react-router';

const TabBar = () => (
  <ul id="tabbar" className="nav nav-tabs">
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul>
);

TabBar.propTypes = {};

export default TabBar;
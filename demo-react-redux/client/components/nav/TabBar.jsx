/**
 * Created by 欧阳 超 on 2017/02/15
 */

import React from 'react';
import { Link } from 'react-router';

const TabBar = () => (
  <ul className="nav nav-tabs">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul>
);

TabBar.propTypes = {};

export default TabBar;
/**
 * Created by 欧阳 超 on 2017/02/15
 */

import React from 'react';

import NavItem from './NavItem';

const TabBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <NavItem to='/home' index={true}>Home</NavItem>
          <NavItem to='/users'>Users</NavItem>
        </ul>
      </div>
    </div>
  </nav>
);

TabBar.propTypes = {};

export default TabBar;
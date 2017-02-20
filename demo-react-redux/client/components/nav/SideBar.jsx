/**
 * Created by 欧阳 超 on 2017/01/26
 */

import React from 'react';

import NavItem from './NavItem';

const SideBar = () => (
  <div className="navbar-default sidebar" role="navigation">
    <div className="sidebar-nav navbar-collapse">
      <ul className="nav in nav-sidebar" id="side-menu">
        <NavItem to='/home' index={true}>Home</NavItem>
        <NavItem to='/users'>Users</NavItem>
      </ul>
    </div>
  </div>
);

SideBar.propTypes = {};

export default SideBar;
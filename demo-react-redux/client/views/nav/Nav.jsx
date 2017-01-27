/**
 * Created by 欧阳 超 on 2017/01/26
 */

import React from 'react';

import SideBar from './SideBar';

const Nav = () => (
  <nav className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="navbar-header">
      <span className="navbar-brand">
        boilerplate-react-redux
      </span>
    </div>
    <SideBar />
  </nav>
);

Nav.propTypes = {};

export default Nav;
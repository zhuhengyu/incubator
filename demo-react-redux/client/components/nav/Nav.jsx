/**
 * Created by 欧阳 超 on 2017/01/26
 */

import React from 'react';

import TabBar from './TabBar';

const Nav = () => (
  <div className="header">
    <nav className="navbar navbar-default navbar-static-top my-navbar-header-color" role="navigation">
      <div className="navbar-header">
        <span className="my-navbar-brand">
          demo-react-redux
        </span>
      </div>
    </nav>
    <TabBar />
  </div>
);

Nav.propTypes = {};

export default Nav;
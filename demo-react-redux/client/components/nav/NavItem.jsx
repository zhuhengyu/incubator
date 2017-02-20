/**
 * Created by 欧阳 超 on 2017/02/20
 */

import React, { PropTypes, Component } from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

class NavItemRaw extends Component {
  render() {
    const { router } = this.props;
    const { index, to, children } = this.props;

    let isActive;
    if (router.isActive('/', true) && index) {
      isActive = true;
    } else {
      isActive = router.isActive(to);
    }
    const LinkComponent = index ? IndexLink : Link;

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent to={to}>{children}</LinkComponent>
      </li>
    );
  }
}

NavItemRaw.propTypes = {
  router: PropTypes.any,
  index: PropTypes.any,
  to: PropTypes.any,
  children: PropTypes.any
};

const NavItem = withRouter(NavItemRaw);

export default NavItem;
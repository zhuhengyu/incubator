/**
 * Created by 欧阳 超 on 2017/01/27
 */

import React from 'react';

const Pagination = props => {
  const {
    count,
    curPage,
    perPage,
  } = props;
  return (
    <nav>
      <ul className="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {curPage - 2 > 0 ? <li><a href="#">{curPage - 2}</a></li> : null}
        {curPage - 1 > 0 ? <li><a href="#">{curPage - 1}</a></li> : null}
        <li className="active"><a href="#">{curPage}</a></li>
        {curPage + 1 < Math.ceil(count / perPage) + 1 ? <li><a href="#">{curPage + 1}</a></li> : null}
        {curPage + 2 < Math.ceil(count / perPage) + 1 ? <li><a href="#">{curPage + 2}</a></li> : null}
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: React.PropTypes.number.isRequired,
  curPage: React.PropTypes.number.isRequired,
  perPage: React.PropTypes.number.isRequired,
};

export default Pagination;

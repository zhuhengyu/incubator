/**
 * Created by 欧阳 超 on 2017/01/27
 */

import React from 'react';

const Pagination = props => {
  const {
    count,
    curPage,
    perPage,
    fetchUserList,
  } = props;
  return (
    <div>
      <div className="col-sm-6 footnote-left">
<<<<<<< HEAD
        Showing {curPage * perPage - perPage + 1} to&nbsp;
        {curPage * perPage > count ? count : curPage * perPage} of {count} entries,&nbsp;
        {curPage} of {Math.ceil(count / perPage)} pages.
              </div>
      <div className="col-sm-6 footnote-right">
        <nav>
          <ul className="pagination pagination-sm">
=======
        Showing {curPage * perPage - perPage + 1} to {curPage * perPage > count ? count : curPage * perPage}&nbsp;
        of {count} entries,&nbsp;
        {curPage} of {Math.ceil(count / perPage)} pages.
      </div>
      <div className="col-sm-6 footnote-right">
        <nav>
          <ul className="pagination">
>>>>>>> a4bef0b341acf4d040ae703b0bde23c8f3eb7657
            <li>
              <a href="#" onClick={() => fetchUserList(1)} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {curPage - 2 > 0 ?
              <li><a href="#" onClick={() => fetchUserList(curPage - 2)}>{curPage - 2}</a></li> :
              null}
            {curPage - 1 > 0 ?
              <li><a href="#" onClick={() => fetchUserList(curPage - 1)}>{curPage - 1}</a></li> :
              null}
            <li className="active"><a href="#" onClick={() => fetchUserList(curPage)}>{curPage}</a></li>
            {curPage < Math.ceil(count / perPage) ?
              <li><a href="#" onClick={() => fetchUserList(curPage + 1)}>{curPage + 1}</a></li> :
              null}
            {curPage + 1 < Math.ceil(count / perPage) ?
              <li><a href="#" onClick={() => fetchUserList(curPage + 1)}>{curPage + 2}</a></li> :
              null}
            <li>
              <a href="#" onClick={() => fetchUserList(Math.ceil(count / perPage))} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  count: React.PropTypes.number.isRequired,
  curPage: React.PropTypes.number.isRequired,
  perPage: React.PropTypes.number.isRequired,
  fetchUserList: React.PropTypes.func.isRequired,
};

export default Pagination;

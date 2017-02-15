/**
 * Created by 欧阳 超 on 2017/01/27
 */

import React, { PropTypes } from 'react';

import Spinner from '../../common/Spinner';

const Pagination = props => {
  let {
    count,
    curPage,
    perPage,
    fetchUserList,
    isFetchingUser,
  } = props;
  return (
    <div>
      <div className="col-sm-6 footnote-left">
        {
          isFetchingUser ?
            (
              <span>
                <Spinner isInline={true} size={16} /> Fetching user list.
              </span>
            ) : (
              <span>
                Showing {curPage * perPage - perPage + 1} to {curPage * perPage > count ? count : curPage * perPage}&nbsp;
                  of {count} entries, {curPage} of {Math.ceil(count / perPage)} pages.
              </span>
            )
        }
      </div>
      <div className="col-sm-6 footnote-right">
        <nav>
          <ul className="pagination pagination-sm">
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
              <li><a href="#" onClick={() => fetchUserList(curPage + 2)}>{curPage + 2}</a></li> :
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
  count: PropTypes.number.isRequired,
  curPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  fetchUserList: PropTypes.func.isRequired,
  isFetchingUser: PropTypes.bool,
};

export default Pagination;

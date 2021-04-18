import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/actions';
import PropTypes from 'prop-types';

function pg(users, currentPage, dispatch, setCurrentPage) {
  let res = [];
  for (let i = 0; i < users.length; i += 5) {
    const page = i / 5 + 1;
    res = [
      ...res,
      <li
        key={i}
        className={`page-item ${currentPage === page ? 'active' : ''}`}
        onClick={() => dispatch(setCurrentPage(page))}
      >
        <span className='page-link btn btn-success'>{page}</span>
      </li>,
    ];
  }
  return res;
}

const Pagination = ({ users }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.users.currentPage);

  const res = pg(users, currentPage, dispatch, setCurrentPage);

  const previous = currentPage === 1 ? 'disabled' : '';
  const setPrevious = (isDisbled) => {
    if (isDisbled) return;
    dispatch(setCurrentPage(currentPage - 1));
  };
 
  const next =
    users.length / 5 <= currentPage ? 'disabled' : '';
  const setNext = (isDisbled) => {
    if (isDisbled) return;
    dispatch(setCurrentPage(currentPage + 1));
  };
  return (
    <nav>
      <ul className='pagination'>
        <li
          className={`page-item ${previous}`}
          onClick={() => setPrevious(!!previous)}
        >
          <span className='page-link btn btn-success'>Previous</span>
        </li>
        {res}
        <li className={`page-item ${next}`} onClick={() => setNext(!!next)}>
          <span className='page-link btn btn-success'>Next</span>
        </li>
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  users: PropTypes.array,
};
export default Pagination;

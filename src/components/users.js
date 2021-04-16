import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import User from './user'
import Pagination from './pagination'

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.users.users);
  console.log(users);
  if (!users.length) {
    return <p className='text-center'>users don`t exist</p>;
  }
  return (
    <div className='users'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <table className="table caption-top">
              <caption>Users</caption>
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">surname</th>
                  <th scope="col">desc</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => <User key={user.id} user={user} />)}
              </tbody>
            </table>
            <Pagination users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

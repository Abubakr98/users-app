import React from 'react';
import { useSelector } from 'react-redux';
import User from './user'
import Pagination from './pagination'

const Users = () => {
  
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.users.currentPage);
  if (!users.length) {
    return <p className='text-center'>users don`t exist</p>;
  }
  const usersPerPage = 5
  const list = users.slice(usersPerPage * (currentPage - 1), usersPerPage * ((currentPage + 1) - 1))
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
                {list.map((user) => <User key={user.id} user={user} />)}
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

import React from 'react';
import { useHistory } from 'react-router-dom';

const User = ({ user }) => {
  let history = useHistory();
  return (
    <tr key={user.id} onClick={()=> history.push(`/update-user/` + user.id)} className='c-pointer'>
        <th scope='row'>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.id}</td>
    </tr>
  );
};
export default User;

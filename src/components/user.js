import React from 'react';

const User = ({ user }) => {
  return (
    <tr key={user.id}>
      <th scope='row'>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.id}</td>
    </tr>
  );
};
export default User;

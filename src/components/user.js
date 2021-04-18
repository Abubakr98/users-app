import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../api/queries';
import { GET_USERS } from '../redux/types';

const User = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const hendler = (e) => {
    if (e.target.tagName === 'TD') history.push(`/update-user/` + user.id);
  };
  const deleteHendler = async (id)=>{
    const res = await deleteUser(id);
    dispatch({
      type: GET_USERS,
      payload: res
    });
  }
  return (
    <tr key={user.id} onClick={hendler} className='c-pointer'>
      <th scope='row'>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.desc}</td>
      <td>
        <button 
        type='button' 
        className='btn btn-danger' 
        onClick={()=>deleteHendler(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default User;

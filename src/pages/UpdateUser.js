import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { setUpdatedUser } from '../redux/actions';
import { put, getUser } from '../api/queries';
import Form from '../components/form';

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { bind, value, clear } = useForm({
    name: '',
    surname: '',
    desc: '',
  });
  useEffect(() => {
    async function get() {
      bind.setNewValue(await getUser(id));
    }
    get();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await put(id, { ...value, avatar: e.target.avatar.files[0] });
    console.log(res);
    dispatch(setUpdatedUser(res));
    clear();
  };
  return (
    <div className='create-user'>
      <Form
        handleSubmit={handleSubmit}
        onChange={bind.onChange}
        value={value}
        clear={clear}
      />
    </div>
  );
};

export default UpdateUser;

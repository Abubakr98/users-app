import React from 'react';
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { post } from '../api/queries';
import Form from '../components/form';

const CreateUser = () => {
  const dispatch = useDispatch();
  const { bind, value, clear } = useForm({
    name: '',
    surname: '',
    desc: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await post({ ...value, avatar: e.target.avatar.files[0] });
    dispatch(setUser(res));
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

export default CreateUser;

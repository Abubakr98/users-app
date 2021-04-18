import React from 'react';
import useForm from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, showLoader, hideLoader } from '../redux/actions';
import { post } from '../api/queries';
import Form from '../components/form';
import { Loader } from '../components/loader';

const CreateUser = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);
  const { bind, value, clear } = useForm({
    name: '',
    surname: '',
    desc: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoader());
    const res = await post({ ...value, avatar: e.target.avatar.files[0] });
    dispatch(setUser(res));
    clear();
    dispatch(hideLoader());
  };
  if (loading) {
    return <Loader />;
  }
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

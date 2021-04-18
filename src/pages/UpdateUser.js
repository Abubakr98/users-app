import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdatedUser, showLoader, hideLoader } from '../redux/actions';
import { put, getUser } from '../api/queries';
import Form from '../components/form';
import { Loader } from '../components/loader';

const UpdateUser = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);
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
    dispatch(showLoader());
    const res = await put(id, { ...value, avatar: e.target.avatar.files[0] });
    dispatch(setUpdatedUser(res));
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

export default UpdateUser;

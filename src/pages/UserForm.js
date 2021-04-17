import React from 'react';
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/actions'
import api from '../api';

const UserForm = () => {
  const dispatch = useDispatch();
  const { bind, value, clear } = useForm({
    name: '',
    surname: '',
    desc: ''
  });
  const { onChange } = bind

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(api.USERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...value, avatar: e.target.avatar.files[0] }),
    });
    dispatch(setUsers(await response.json()));
    clear();
  };
  return (
    <div className='create-user'>
      <div className='container'>
        <div className='row justify-content-center p-3'>
          <div className='col-xl-6'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  required
                  className="form-control form-control-lg"
                  name="name"
                  placeholder="name"
                  onChange={onChange}
                  value={value.name}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  required
                  className="form-control form-control-lg"
                  name="surname"
                  placeholder="surname"
                  onChange={onChange}
                  value={value.surname} />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control form-control-lg"
                  name="desc"
                  required
                  placeholder="description"
                  rows="3"
                  onChange={onChange}
                  value={value.desc}>
                </textarea>
              </div>
              <div className="mb-3">
                <input
                  className="form-control form-control-lg"
                  name="avatar"
                  type="file"
                />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg me-3"
                >create</button>
                <button
                  type='reset'
                  className="btn btn-danger btn-lg"
                  onClick={() => clear()}
                >clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

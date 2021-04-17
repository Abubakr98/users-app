import React from 'react';

const UserForm = () => {
  return (
    <div className='create-user'>
      <div className='container'>
        <div className='row justify-content-center p-3'>
          <div className='col-xl-6'>
            <form>
              <div className="mb-3">
                <input type="text" required className="form-control form-control-lg" name="name" placeholder="name" />
              </div>
              <div className="mb-3">
                <input type="text" required className="form-control form-control-lg" name="surname" placeholder="surname" />
              </div>
              <div class="mb-3">
                <textarea class="form-control form-control-lg" name="desc" placeholder="description" rows="3"></textarea>
              </div>
              <div>
                <input class="form-control form-control-lg" name="file" type="file" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

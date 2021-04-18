import React from 'react';

const Form = ({handleSubmit, onChange, value, clear}) => {

    return(
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
    )
}
export default Form;

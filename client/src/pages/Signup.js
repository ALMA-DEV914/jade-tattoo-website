import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="d-flex justify-center mb-4">
      <div className="col-12 col-md-6 mx-auto">

          <div className="card-body">
            <form onSubmit={handleFormSubmit} className="form">
            {error && <div className='bg-danger text-white p-2 opacity-75 text-center'>Signup failed</div>}
              <h2 className='text-secondary mb-2 text-center'>Signup</h2>
            <label htmlFor="name">Username</label>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
                <label htmlFor="email">Email</label>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
                <label htmlFor="password">Password</label>
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <br></br>
              <button className="btn w-100 bg-success text-white mt-2" type="submit">
                Submit
              </button>
              <br></br><br></br><br></br>
              <Link to="/login">
            <button className="btn bg-info text-white w-100">LOGIN</button>
          </Link>
            </form>
            </div>
        </div>
     
    </main>
  );
};

export default Signup;

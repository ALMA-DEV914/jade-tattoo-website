import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Footer from "../components/Footer"
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4 mt-2">
      <div className="col-12 col-md-6 mx-auto">
          <div className="card-body">
            <form onSubmit={handleFormSubmit} className="form">
            {error && <div className='bg-danger text-white p-2 opacity-75 text-center'>Login failed! Incorrect credentials.</div>}
            <h2 className='text-center text-secondary mb-2'>Login</h2>
              <label htmlFor="name">Username</label>
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
              /><br></br>
              <button className="btn  w-100 mt-2 bg-success text-white" type="submit" onSubmit={handleFormSubmit}>
                Submit
              </button>
              <Link to="/signup">
                <button className='btn  w-100 mt-4 bg-secondary text-white'>Singup</button>
              </Link>
            </form>
          </div>
        </div>
        <Footer/>
      
    </main>
  );
};

export default Login;

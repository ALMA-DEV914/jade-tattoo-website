import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Footer from '../components/Footer';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    image: ''
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
    <>
    <main className="d-flex justify-center mb-4">
      <div className="col-12 col-md-6 mx-auto">

          <div className="card-body">
            <form onSubmit={handleFormSubmit} className="form">
            {error && <div className='bg-danger text-white p-2 opacity-75 text-center'>Signup failed</div>}
              <h2 className='text-secondary mb-2 text-center'>Signup</h2>
            <label htmlFor="name" className='mb-2'>Username</label>
              <input
                className="form-input mb-2"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
                <label htmlFor="email" className='mb-2'>Email</label>
              <input
                className="form-input mb-2"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
                <label htmlFor="password" className='mb-2'>Password</label>
              <input
                className="form-input mb-2"
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
            <button className="btn bg-secondary text-white w-100">LOGIN</button>
          </Link>
            </form>
            </div>
        </div>
    </main>
    <br></br>
      <br></br>
      <br></br>
    <Footer/>
    </>
  );
};

export default Signup;

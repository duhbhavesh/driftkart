import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import './Login.css';
import toast from 'react-hot-toast';

export const Login = () => {
   const { handleUserLogin, authDispatch } = useAuth();
   const { state } = useLocation();
   const [user, setUser] = useState({
      email: '',
      password: '',
   });
   const [serverError, setServerError] = useState('');
   const notify = (message) => toast.success(message);
   const navigateToPath = state?.from ? state.from : '/';

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormSubmit = async () => {
      setServerError('');

      // Basic client-side validation
      if (!user.email || !user.password) {
         setServerError('Please fill in all fields.');
         return;
      }

      const response = await handleUserLogin(
         user,
         authDispatch,
         navigateToPath,
         notify,
      );

      if (response.status === 200) {
         console.log('Logged in successfully');
      } else {
         setServerError(response.response.data.error || 'An error occurred.');
      }
   };

   return (
      <>
         <div className='container'>
            <div className='container-login'>
               <div className='card-login'>
                  <h3 className='title-login'>Log in to Driftkart</h3>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-email'>
                        E-mail
                     </label>
                     <input
                        className='input-box'
                        id='input-email'
                        type='text'
                        placeholder='name@example.com'
                        name='email'
                        value={user.email}
                        onChange={handleOnChangeInput}
                     />
                  </div>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-password'>
                        Password
                     </label>
                     <input
                        className='input-box'
                        id='input-password'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={user.password}
                        onChange={handleOnChangeInput}
                     />
                  </div>
                  <button
                     className='btn btn-primary btn-login'
                     onClick={handleFormSubmit}>
                     Log in
                  </button>
                  <small className='server-error'>
                     {serverError && <span>{serverError}</span>}
                  </small>
                  <Link className='signup-link' to='/signup'>
                     <small>New to Driftkart? Create an account</small>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

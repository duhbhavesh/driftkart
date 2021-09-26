import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Signup.css';

const isValidEmail = (email) => {
   const emailRegex = new RegExp('[a-z][0-9]*@gmail.com');
   return emailRegex.test(email);
};

const isValidPassword = (password) => {
   const passwordRegex = new RegExp('[0-9]+');
   return password.length > 6 && passwordRegex.test(password);
};

export const Signup = () => {
   const { handleUserSignup } = useAuth();
   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });
   const [error, setError] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });

   const [serverError, setServerError] = useState('');
   const navigate = useNavigate();
   const notify = (message) => toast.success(message);

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormValidate = () => {
      setError({ firstName: '', lastName: '', email: '', password: '' });
      let successVailidation = true;
      if (!user.firstName) {
         setError((error) => ({
            ...error,
            firstName: 'Please enter a valid name',
         }));
         successVailidation = false;
      }

      if (!user.lastName) {
         setError((error) => ({
            ...error,
            lastName: 'Please enter a valid name',
         }));
         successVailidation = false;
      }

      if (!user.email || !isValidEmail(user.email)) {
         setError((error) => ({
            ...error,
            email: 'Please enter a valid email',
         }));
         successVailidation = false;
      }

      if (!user.password || !isValidPassword(user.password)) {
         setError((error) => ({
            ...error,
            password: 'Password must be 6 characters long',
         }));
         successVailidation = false;
      }

      return successVailidation;
   };

   const handleFormSubmit = async () => {
      if (handleFormValidate()) {
         const response = await handleUserSignup(user, notify);

         if (response?.status === 201) {
            navigate('/login');
            notify('User Signed Up');
         }

         if (response?.status !== 201) {
            setServerError(response?.data.message);
         }
      }
   };

   return (
      <>
         <div className='container'>
            <div className='container-login'>
               <div className='card-login'>
                  <h3 className='title-login'>Sign up</h3>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-first-name'>
                        First Name
                     </label>
                     <input
                        className='input-box'
                        id='input-first-name'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={user.firstName}
                        onChange={handleOnChangeInput}
                     />
                     {error.firstName && (
                        <small className='error-text'>*{error.firstName}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-last-name'>
                        Last Name
                     </label>
                     <input
                        className='input-box'
                        id='input-last-name'
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={user.lastName}
                        onChange={handleOnChangeInput}
                     />
                     {error.lastName && (
                        <small className='error-text'>*{error.lastName}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-email'>
                        E-mail
                     </label>
                     <input
                        className='input-box'
                        id='input-email'
                        type='email'
                        placeholder='name@gmail.com'
                        name='email'
                        value={user.email}
                        onChange={handleOnChangeInput}
                     />
                     {error.email && (
                        <small className='error-text'>*{error.email}</small>
                     )}
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
                     {error.password && (
                        <small className='error-text'>*{error.password}</small>
                     )}
                  </div>
                  <button
                     className='btn btn-primary btn-signup'
                     onClick={handleFormSubmit}>
                     Sign up
                  </button>
                  {serverError && (
                     <div class='alert alert-error'>
                        <p class='alert-heading'>
                           <span>
                              <i class='fas fa-exclamation-circle'></i>
                           </span>
                           {serverError}
                        </p>
                     </div>
                  )}
                  <Link className='login-link' to='/login'>
                     <small>Existing User? Login</small>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

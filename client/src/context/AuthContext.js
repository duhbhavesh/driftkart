import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthReducer } from '../reducer/AuthReducer';
import axios from 'axios';
import { API_ENDPOINT } from '../utils/utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();

   const { token: tokenDetail } = JSON.parse(
      localStorage?.getItem('session'),
   ) || { token: '' };

   const initialState = {
      token: tokenDetail,
      user: null,
   };

   const [authState, authDispatch] = useReducer(AuthReducer, initialState);

   const handleUserSignup = async (user) => {
      try {
         const response = await axios.post(`${API_ENDPOINT}/api/signup`, user);
         return response;
      } catch (error) {
         console.log(error);
      }
   };

   const handleUserLogin = async (user, authDispatch, from, notify) => {
      try {
         const response = await axios.post(`${API_ENDPOINT}/api/login`, user);
         if (response.status === 200) {
            localStorage.setItem(
               'session',
               JSON.stringify({ token: response.data.token }),
            );
            notify('Logged In Successfully!');
            authDispatch({
               type: 'SET_USER_LOGIN',
               payload: response.data.token,
            });
            navigate(from);
         }
         return response;
      } catch (error) {
         console.log(error);
         return error;
      }
   };

   const handleUserLogout = async (authDispatch, notify) => {
      setTimeout(() => {
         localStorage?.removeItem('session');
         notify('Logged Out Successfully!');
         authDispatch({ type: 'SET_USER_LOGOUT' });
      }, 1000);
   };

   return (
      <AuthContext.Provider
         value={{
            handleUserSignup,
            handleUserLogin,
            handleUserLogout,
            authState,
            authDispatch,
         }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);

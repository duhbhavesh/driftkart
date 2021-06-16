import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthReducer } from '../reducer/AuthReducer';
import { handleUserSignup } from '../utils/serverRequest';
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
   };

   const [state, dispatch] = useReducer(AuthReducer, initialState);

   const handleUserLogin = async (user, dispatch, from, notify) => {
      try {
         const response = await axios.post(`${API_ENDPOINT}/api/login`, user);
         if (response.status === 200) {
            localStorage.setItem(
               'session',
               JSON.stringify({ token: response.data.token }),
            );
            notify('Logged In Successfully!');
            dispatch({ type: 'SET_USER_LOGIN', payload: response.data.token });
            navigate(from);
         }
         return response;
      } catch (error) {
         console.log(error);
         return error;
      }
   };

   const handleUserLogout = async (dispatch, notify) => {
      setTimeout(() => {
         localStorage?.removeItem('session');
         notify('Logged Out Successfully!');
         dispatch({ type: 'SET_USER_LOGOUT' });
      }, 1000);
   };

   return (
      <AuthContext.Provider
         value={{
            handleUserSignup,
            handleUserLogin,
            handleUserLogout,
            state,
            dispatch,
         }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);

import './styles.css';
import { useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { useData } from './context/DataContext';
import {
   handleFetchCart,
   handleFetchProducts,
   handleFetchWishlist,
} from './utils/serverRequest';
import { Toast } from './components/Toast/Toast';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Routes } from './routes/Routes';

const App = () => {
   const { dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();

   useEffect(() => {
      handleFetchProducts(dispatch);
   }, []);

   useEffect(() => {
      if (token) {
         handleFetchCart(dispatch, token);
         handleFetchWishlist(dispatch, token);
      }
   }, [dispatch, token]);

   return (
      <div className='App'>
         <Header />
         <Toast />
         <Routes />
         <Footer />
      </div>
   );
};

export default App;

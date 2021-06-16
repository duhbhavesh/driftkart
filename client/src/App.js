import './styles.css';
import { useData } from './context/DataContext';
import { useEffect } from 'react';
import {
   handleFetchCart,
   handleFetchProducts,
   handleFetchWishlist,
} from './utils/serverRequest';
import { Routes, Route } from 'react-router-dom';
import { Toast } from './components/Toast/Toast';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Product } from './pages/Product/Product';
import { WishList } from './pages/WishList/WishList';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { Signup } from './pages/Auth/SignUp/Signup';
import { Login } from './pages/Auth/SignIn/Login';
import { PrivateRoute } from './pages/Auth/PrivateRoute';
import { useAuth } from './context/AuthContext';

const App = () => {
   const { dispatch } = useData();
   const {
      state: { token },
   } = useAuth();

   useEffect(() => {
      handleFetchProducts(dispatch);
   }, [dispatch]);

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
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />

            <PrivateRoute path='/wishlist' element={<WishList />} />
            <PrivateRoute path='/cart' element={<Cart />} />

            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
         </Routes>
         <Footer />
      </div>
   );
};

export default App;

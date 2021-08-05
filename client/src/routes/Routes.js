import { Routes as Routing, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Products } from '../pages/Products/Products';
import { SearchResults } from '../pages/SearchResults/SearchResults';
import { Product } from '../pages/Product/Product';
import { PrivateRoute } from '../pages/Auth/PrivateRoute';
import { WishList } from '../pages/WishList/WishList';
import { Cart } from '../pages/Cart/Cart';
import { Signup } from '../pages/Auth/SignUp/Signup';
import { Login } from '../pages/Auth/SignIn/Login';

export const Routes = () => {
   return (
      <>
         <Routing>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Products />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/product/:id' element={<Product />} />

            <PrivateRoute path='/wishlist' element={<WishList />} />
            <PrivateRoute path='/cart' element={<Cart />} />

            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
         </Routing>
      </>
   );
};

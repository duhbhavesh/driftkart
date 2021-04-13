import './styles.css';
import { Routes, Route, Link } from 'react-router-dom';
import { ProductList } from './components/Product/ProductList';
import { WishList } from './components/WishList/WishList';
import { CartList } from './components/Cart/CartList';
import { Header } from './components/Header/Header';

const App = () => {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route path='/products' element={<ProductList />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<CartList />} />
         </Routes>
      </div>
   );
};

export default App;

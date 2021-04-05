import { useState } from 'react';
import { ProductList } from './components/Product/ProductList';
import { WishList } from './components/WishList/WishList';
import { CartList } from './components/Cart/CartList';
import './styles.css';

const App = () => {
   const [route, setRoute] = useState('products');

   return (
      <div className='App'>
         <h1>E-commerce</h1>
         <button onClick={() => setRoute('products')}>Products</button>
         <button onClick={() => setRoute('wishList')}>WishList</button>
         <button onClick={() => setRoute('cart')}>Cart</button>

         {route === 'products' && <ProductList />}
         {route === 'wishList' && <WishList />}
         {route === 'cart' && <CartList />}
      </div>
   );
};

export default App;

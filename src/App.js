import { useData } from './context/DataContext';
import { useState } from 'react';
import { ProductList } from './components/Product/ProductList';
import { WishList } from './components/WishList/WishList';
import { CartList } from './components/Cart/CartList';
import './styles.css';

const App = () => {
   const { state, dispatch } = useData();
   const { wishList, cart } = state;
   const [route, setRoute] = useState('products');

   return (
      <div className='App'>
         <h1>E-commerce</h1>
         <button onClick={() => setRoute('products')}>Products</button>
         <button onClick={() => setRoute('wishList')}>
            WishList ({wishList.length})
         </button>
         <button onClick={() => setRoute('cart')}>Cart ({cart.length})</button>

         {route === 'products' && <ProductList />}
         {route === 'wishList' && <WishList />}
         {route === 'cart' && <CartList />}
      </div>
   );
};

export default App;

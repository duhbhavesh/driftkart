import { useData } from '../context/DataContext';
import { CartItem } from '../components/Cart/CartItem';
import { CartSummary } from '../components/Cart/CartSummary';
import './Cart.css';

export const Cart = () => {
   const { state, dispatch } = useData();
   const { cart } = state;

   return (
      <>
         <h2 className='title-sec'>Cart</h2>
         {cart.length === 0 ? (
            <h3>Your Cart is Empty</h3>
         ) : (
            <div className='wrapper-cart'>
               <div className='wrapper-cart-details'>
                  <div className='cart-item-length'>
                     My Cart ({cart.length} items)
                  </div>
                  {cart.map((product) => {
                     return <CartItem key={product.id} product={product} />;
                  })}
               </div>
               <div className='wrapper-cart-summary'>
                  <CartSummary />
               </div>
            </div>
         )}
      </>
   );
};

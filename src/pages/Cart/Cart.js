import { useData } from '../../context/DataContext';
import { CartItem } from '../../components/Cart/CartItem';
import { CartSummary } from '../../components/Cart/CartSummary';
import './Cart.css';

export const Cart = () => {
   const { state } = useData();
   const { cart } = state;

   return (
      <>
         <section className='cart-sec'>
            <h2 className='cart-heading'>Cart</h2>
            {cart.length === 0 ? (
               <h3 className='cart-info'>Your Cart is Empty</h3>
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
         </section>
      </>
   );
};

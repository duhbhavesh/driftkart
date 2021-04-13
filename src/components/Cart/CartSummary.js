import { useData } from '../../context/DataContext';
import './CartSummary.css';

const getAmount = (items) => {
   return items.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0,
   );
};

export const CartSummary = () => {
   const { state } = useData();
   const { cart } = state;

   return (
      <>
         <div className='cart-summary'>
            <div className='cart-summary-heading'>
               <h3 className='cart-summary-title'>Summary</h3>
            </div>
            <div className='cart-summary-subtotal'>
               <div className='cart-summary-txt'>Subtotal</div>
               <div className='cart-summary-amt'>
                  ₹{getAmount(cart).toFixed(2)}
               </div>
            </div>
            <div className='cart-summary-delivery'>
               <div className='cart-summary-txt'>
                  Estimated Delivery & Handling
               </div>
               <div className='cart-summary-amt'>₹0.00</div>
            </div>
            <div className='cart-summary-total'>
               <div className='cart-summary-txt'>Total</div>
               <div className='cart-summary-amt'>
                  ₹{getAmount(cart).toFixed(2)}
               </div>
            </div>
            <div className='cart-summary-checkout'>
               <button className='btn btn-primary cart-checkout-btn'>
                  Buy Now
               </button>
            </div>
         </div>
      </>
   );
};

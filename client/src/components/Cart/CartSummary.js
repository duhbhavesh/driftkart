import { useData } from '../../context/DataContext';
import './CartSummary.css';

const getAmount = (items) => {
   return items.reduce((acc, item) => {
      return acc + Number(item.product.price) * item.quantity;
   }, 0);
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
            <div className='cart-summary-checkout-md'>
               <button className='btn btn-primary btn-pill cart-checkout-btn'>
                  Proceed to Checkout &#x276F;
               </button>
            </div>
            <div className='cart-summary-checkout-sm'>
               <button className='btn btn-primary btn-pill cart-checkout-btn'>
                  Proceed to Checkout &#x276F;
               </button>
            </div>
         </div>
      </>
   );
};

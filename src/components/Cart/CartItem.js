import { useData } from '../../context/DataContext';
import './CartItem.css';

export const CartItem = ({ product }) => {
   const { dispatch } = useData();

   const handleIncrementQty = (product) => {
      return dispatch({ type: 'INC_QTY', payload: product });
   };

   const handleDecrementQty = (product) => {
      return dispatch({ type: 'DEC_QTY', payload: product });
   };

   const handleRemoveCartItem = (product) => {
      return dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   };

   return (
      <>
         <div class='cart-item'>
            <figure class='cart-item-figure'>
               <img class='cart-image' alt='' src={product.image} />
            </figure>
            <div class='cart-item-details'>
               <div class='cart-item-title'>{product.name}</div>
               <div class='cart-item-brand'>Brand - {product.brand}</div>
               <div class='cart-item-quantity'>
                  <button
                     onClick={() => handleDecrementQty(product)}
                     class='btn cart-item-quantity-dec'>
                     -
                  </button>
                  <span class='cart-item-qty'>{product.quantity}</span>
                  <button
                     onClick={() => handleIncrementQty(product)}
                     class='btn cart-item-quantity-inc'>
                     +
                  </button>
               </div>
               <div class='cart-item-btns cart-item-btns-md'>
                  <button class='btn cart-item-btn'>Move to Wishlist</button>
                  <button
                     onClick={() => handleRemoveCartItem(product)}
                     class='btn cart-item-btn'>
                     Remove
                  </button>
               </div>
            </div>
            <div class='cart-item-subtotal'>
               ₹<span>{product.quantity * product.price}</span>
            </div>
            <div class='cart-item-btns cart-item-btns-sm'>
               <button class='btn cart-item-btn'>Move to Wishlist</button>
               <button
                  onClick={() => handleRemoveCartItem(product)}
                  class='btn cart-item-btn'>
                  Remove
               </button>
            </div>
         </div>
      </>
   );
};

import { useData } from '../../context/DataContext';
import toast from 'react-hot-toast';
import './CartItem.css';

export const CartItem = ({ product }) => {
   const { dispatch } = useData();

   const notifyRemove = (message) => toast.error(message);
   const notifyAdd = (message) => toast.success(message);

   const handleIncrementQty = (product) => {
      return dispatch({ type: 'INC_QTY', payload: product });
   };
   const handleDecrementQty = (product) => {
      return dispatch({ type: 'DEC_QTY', payload: product });
   };
   const handleRemoveCartItem = (product) => {
      notifyRemove(`${product.name} removed from the Cart`);
      return dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   };
   const handleMovetoWishList = (product) => {
      notifyAdd(`${product.name} moved to the Wishlist`);
      dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
      dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   };

   return (
      <>
         <div className='cart-item'>
            <figure className='cart-item-figure'>
               <img className='cart-image' alt='' src={product.image} />
            </figure>
            <div className='cart-item-details'>
               <div className='cart-item-title'>{product.name}</div>
               <div className='cart-item-brand'>Brand - {product.brand}</div>
               <div className='cart-item-quantity'>
                  <button
                     onClick={() => handleDecrementQty(product)}
                     className='btn btn-square cart-item-quantity-dec'>
                     -
                  </button>
                  <span className='cart-item-qty'>{product.quantity}</span>
                  <button
                     onClick={() => handleIncrementQty(product)}
                     className='btn btn-square cart-item-quantity-inc'>
                     +
                  </button>
               </div>
               <div className='cart-item-btns cart-item-btns-md'>
                  <button
                     onClick={() => handleRemoveCartItem(product)}
                     className='btn cart-item-btn'>
                     Remove
                  </button>
                  <button
                     onClick={() => handleMovetoWishList(product)}
                     className='btn cart-item-btn'>
                     Move to Wishlist
                  </button>
               </div>
            </div>
            <div className='cart-item-subtotal'>
               ₹<span>{product.quantity * product.price}</span>
            </div>
            <div className='cart-item-btns cart-item-btns-sm'>
               <button
                  onClick={() => handleMovetoWishList(product)}
                  className='btn cart-item-btn'>
                  Move to Wishlist
               </button>
               <button
                  onClick={() => handleRemoveCartItem(product)}
                  className='btn cart-item-btn'>
                  Remove
               </button>
            </div>
         </div>
      </>
   );
};

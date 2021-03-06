import { useData } from '../../context/DataContext';
import { RemoveCartItemButton } from '../Buttons/RemoveCartItemButton';
import { MoveToWishListButton } from '../Buttons/MoveToWishListButton';
import './CartItem.css';

export const CartItem = ({ product, quantity }) => {
   const { dispatch } = useData();
   const { image, name, brand, price } = product;

   const handleIncrementQty = (product) => {
      return dispatch({ type: 'INCREASE_QUANTITY', payload: product });
   };
   const handleDecrementQty = (product) => {
      return dispatch({ type: 'DECREASE_QUANTITY', payload: product });
   };
   return (
      <>
         <div className='cart-item'>
            <figure className='cart-item-figure'>
               <img className='cart-image' alt='' src={image} />
            </figure>
            <div className='cart-item-details'>
               <div className='cart-item-title'>{name}</div>
               <div className='cart-item-brand'>Brand - {brand}</div>
               <div className='cart-item-quantity'>
                  <button
                     onClick={() => handleDecrementQty(product)}
                     disabled={quantity < 1}
                     className='btn btn-square cart-item-quantity-dec'>
                     -
                  </button>
                  <span className='cart-item-qty'>{quantity}</span>
                  <button
                     onClick={() => handleIncrementQty(product)}
                     className='btn btn-square cart-item-quantity-inc'>
                     +
                  </button>
               </div>
               <div className='cart-item-btns cart-item-btns-md'>
                  <RemoveCartItemButton product={product} />
                  <MoveToWishListButton product={product} />
               </div>
            </div>
            <div className='cart-item-subtotal'>
               ₹<span>{quantity * price}</span>
            </div>
            <div className='cart-item-btns cart-item-btns-sm'>
               <MoveToWishListButton product={product} />
               <RemoveCartItemButton product={product} />
            </div>
         </div>
      </>
   );
};

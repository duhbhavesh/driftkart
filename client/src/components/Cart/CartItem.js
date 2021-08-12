import { useData } from '../../context/DataContext';
import { RemoveCartItemButton } from '../Buttons/RemoveCartItemButton';
import { MoveToWishListButton } from '../Buttons/MoveToWishListButton';
import { Link } from 'react-router-dom';
import './CartItem.css';

export const CartItem = ({ product, quantity }) => {
   const { dispatch } = useData();
   const { image, name, brand, price, id } = product;

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
               <Link to={`/product/${id}`} className='cart-item-title'>
                  {name}
               </Link>
               <div className='cart-item-brand'>Brand - {brand}</div>
               <div className='cart-item-quantity'>
                  <button
                     onClick={() => handleDecrementQty(product)}
                     className='btn btn-square cart-item-quantity-dec'
                     disabled={quantity <= 1}>
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
               ₹<span>{(quantity * price).toLocaleString()}</span>
            </div>
            <div className='cart-item-btns cart-item-btns-sm'>
               <MoveToWishListButton product={product} />
               <RemoveCartItemButton product={product} />
            </div>
         </div>
      </>
   );
};

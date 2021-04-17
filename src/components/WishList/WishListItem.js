import { useData } from '../../context/DataContext';
import toast from 'react-hot-toast';
import './WishListItem.css';

export const WishListItem = ({ product }) => {
   const { state, dispatch } = useData();

   const notifyAdd = (message) => toast.success(message);
   const notifyRemove = (message) => toast.error(message);

   const checkCart = (product) => {
      const cartArr = state.cart.filter((data) => data.id === product.id);
      if (cartArr.length === 0) {
         return true;
      }
   };
   const handleAddToCart = (product) => {
      if (checkCart(product)) {
         notifyAdd(`${product.name} Added to the Cart`);
         dispatch({ type: 'ADD_CART_ITEM', payload: product });
         dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
      }
   };
   const handleRemoveWishListItem = (product) => {
      notifyRemove(`${product.name} is Removed from the Wishlist`);
      return dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
   };

   return (
      <div className='wishlist-card product product-card'>
         <button
            onClick={() => handleRemoveWishListItem(product)}
            className='btn btn-square btn-circle btn-top-right'
            type='button'>
            <i class='far fa-trash-alt'></i>
         </button>
         <div className='product-image'>
            <img className='card-img' src={product.image} alt='' />
         </div>
         <div className='product-details'>
            <h3 className='product-heading'>
               <a id='product-title' href='#'>
                  {product.name}
               </a>
            </h3>
            <div className='product-price'>
               <p className='new-price'>
                  ₹{product.price}{' '}
                  <span className='old-price'>₹ {product.price}</span>
               </p>
            </div>
         </div>
         <div className='product-details'>
            <div className='rating'>
               <span>
                  <i className='fas fa-star'></i>
               </span>
               <span>
                  <strong>4.5</strong>/5.0
               </span>
            </div>
            <div className='cart'>
               <button
                  onClick={() => handleAddToCart(product)}
                  className='btn btn-primary btn-cart'
                  type='button'>
                  Move to Cart
               </button>
            </div>
         </div>
      </div>
   );
};

import { useData } from '../../context/DataContext';
import './WishList.css';

export const WishListItem = ({ product }) => {
   const { state, dispatch } = useData();

   const checkCart = (product) => {
      const cartArr = state.cart.filter((data) => data.id === product.id);
      if (cartArr.length === 0) {
         return true;
      }
   };

   const handleAddToCart = (product) => {
      if (checkCart(product)) {
         console.log('adding to cart');
         return dispatch({ type: 'ADD_CART_ITEM', payload: product });
      } else {
         return dispatch({ type: 'INC_QTY', payload: product });
      }
   };

   const handleRemoveWishListItem = (product) => {
      console.log('removing');
      return dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
   };

   return (
      <div className='wishlist-card product product-card'>
         <button
            onClick={() => handleRemoveWishListItem(product)}
            class='btn btn-square btn-circle btn-top-right'
            type='button'>
            <i class='far fa-trash-alt'></i>
         </button>
         <div class='product-image'>
            <img class='card-img' src={product.image} alt='' />
         </div>
         <div class='product-details'>
            <h3 class='product-heading'>
               <a id='product-title' href='#'>
                  {product.name}
               </a>
            </h3>
            <div class='product-price'>
               <p class='new-price'>
                  ₹{product.price}{' '}
                  <span class='old-price'>₹ {product.price}</span>
               </p>
            </div>
         </div>
         <div class='product-details'>
            <div class='rating'>
               <span>
                  <i class='fas fa-star'></i>
               </span>
               <span>
                  <strong>4.5</strong>/5.0
               </span>
            </div>
            <div class='cart'>
               <button
                  onClick={() => handleAddToCart(product)}
                  class='btn btn-primary btn-cart'
                  type='button'>
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   );
};

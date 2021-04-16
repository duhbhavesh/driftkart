import { useData } from '../../context/DataContext';
import './ProductItem.css';

export const ProductItem = ({ product }) => {
   const { state, dispatch } = useData();
   const { cart, wishList } = state;

   const checkCart = cart.filter((item) => item.id === product.id);
   const checkWishList = wishList.filter((item) => item.id === product.id);

   const handleAddToCart = (product) => {
      if (checkCart.length === 0) {
         console.log('adding to cart');
         return dispatch({ type: 'ADD_CART_ITEM', payload: product });
      } else {
         return dispatch({ type: 'INC_QTY', payload: product });
      }
   };

   const handleWishList = (product) => {
      if (checkWishList.length === 0) {
         console.log('adding to wishList');
         return dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
      } else {
         console.log('remove from wishList');
         return dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
      }
   };

   return (
      <>
         <div className='card product product-card'>
            <button
               onClick={() => handleWishList(product)}
               className='btn btn-square btn-circle btn-top-right btn-wishlist'
               type='button'>
               <i
                  className={
                     checkWishList.length === 0
                        ? 'fas fa-heart fa-heart-product'
                        : 'fas fa-heart fa-heart-product active'
                  }></i>
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
                     <strong>{product.ratings}.0</strong>/5.0
                  </span>
               </div>
               <div className='cart'>
                  <button
                     onClick={() => handleAddToCart(product)}
                     className='btn btn-primary btn-cart'
                     type='button'>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

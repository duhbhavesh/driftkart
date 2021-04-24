import { useData } from '../../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './ProductItem.css';

export const ProductItem = ({ product }) => {
   const { state, dispatch } = useData();
   const { cart, wishList } = state;
   const navigate = useNavigate();

   const checkCart = cart.filter((item) => item.id === product.id);
   const checkWishList = wishList.filter((item) => item.id === product.id);

   const notifyAdd = (message) => toast.success(message);
   const notifyRemove = (message) => toast.error(message);

   const handleAddToCart = (product) => {
      if (checkCart.length === 0) {
         notifyAdd(`${product.name} Added to the Cart`);
         return dispatch({ type: 'ADD_CART_ITEM', payload: product });
      } else {
         navigate('/cart');
      }
   };
   const handleWishList = (product) => {
      if (checkWishList.length === 0) {
         notifyAdd(`${product.name} Added to the Wishlist`);
         return dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
      } else {
         notifyRemove(`${product.name} Removed from the Wishlist`);
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
                  <Link to='#' id='product-title'>
                     {product.name}
                  </Link>
               </h3>
               <div className='rating'>
                  <span>
                     <i className='fas fa-star'></i>
                  </span>
                  <span>
                     <strong>{product.ratings}.0</strong>/5.0
                  </span>
               </div>
            </div>
            <div className='product-details'>
               <div className='product-price'>
                  <p className='new-price'>
                     ₹{product.price}{' '}
                     <span className='old-price'>₹ {product.price}</span>
                  </p>
               </div>
               <div className='cart'>
                  <button
                     onClick={() => handleAddToCart(product)}
                     className='btn btn-primary btn-cart'
                     type='button'>
                     {checkCart.length === 0 ? 'Add to Cart' : 'Go to Cart'}
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

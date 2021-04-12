import { useData } from '../../context/DataContext';

export const ProductItem = ({ product }) => {
   const { state, dispatch } = useData();

   const checkCart = (product) => {
      const cartArr = state.cart.filter((data) => data.id === product.id);
      if (cartArr.length === 0) {
         return true;
      }
   };

   const checkWishList = (product) => {
      const wishListArr = state.wishList.filter(
         (data) => data.id === product.id,
      );
      if (wishListArr.length === 0) {
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

   const handleAddToWishList = (product) => {
      if (checkWishList(product)) {
         console.log('adding to wishList');
         return dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
      } else {
         console.log('remove from wishList');
         return dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
      }
   };

   return (
      <>
         <div class='card product product-card'>
            <button
               onClick={() => handleAddToWishList(product)}
               class='btn btn-square btn-circle btn-top-right'
               type='button'>
               <i class='far fa-heart'></i>
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

         {/* <div style={{ border: '1px solid', padding: '1rem', margin: '1rem' }}>
            <img src={product.image} alt='product' />
            <h2>{product.name}</h2>
            <p>Rs.{product.price}</p>
            {product.inStock && <p>In Stock</p>}
            {!product.inStock && <p>Out of Stock</p>}
            {product.fastDelivery ? <p>Fast Delivery</p> : <p>3 days min</p>}
            <button onClick={() => handleAddToCart(product)}>
               Add to Cart
            </button>
            <button onClick={() => handleAddToWishList(product)}>
               Add to Wish List
            </button>
         </div> */}
      </>
   );
};

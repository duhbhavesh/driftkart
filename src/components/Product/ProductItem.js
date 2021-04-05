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
         console.log('increase quantity');
      }
   };

   const handleAddToWishList = (product) => {
      if (checkWishList(product)) {
         console.log('adding to wishList');
         return dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
      } else {
         console.log('remove from wishList');
      }
   };

   return (
      <div style={{ border: '1px solid', padding: '1rem', margin: '1rem' }}>
         <h2>{product.name}</h2>
         <p>Rs.{product.price}</p>
         <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
         <button onClick={() => handleAddToWishList(product)}>
            Add to Wish List
         </button>
      </div>
   );
};

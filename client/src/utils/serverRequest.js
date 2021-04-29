import axios from 'axios';
import { checkItem } from '../utils/arrayFunction';

export const handleFetchProducts = async (url) => {
   const response = await axios({ method: 'GET', url: url });

   if (response.status === 200 || response.status === 201) {
      return response;
   } else {
      throw new Error('Failed to fetch products');
   }
};

export const handleAddToCartItem = async ({
   state,
   dispatch,
   product,
   navigate,
   notify,
}) => {
   if (checkItem(state.cart, product).length === 0) {
      notify(`${product.name} Adding to the Cart`);
      try {
         const { status } = await axios({
            method: 'POST',
            url: `https://driftkart-backend.duhbhavesh.repl.co/cart`,
            data: {
               _id: product.id,
               quantity: 1,
            },
         });

         if (status === 200 || status === 201) {
            dispatch({ type: 'ADD_CART_ITEM', payload: product });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      navigate('/cart');
   }
};

export const handleAddRemoveWishlistItem = async ({
   state,
   dispatch,
   product,
   notify,
}) => {
   if (checkItem(state.wishList, product).length === 0) {
      notify(`${product.name} Adding to the Wishlist`);
      try {
         const { status } = await axios({
            method: 'POST',
            url: `https://driftkart-backend.duhbhavesh.repl.co/wishlist`,
            data: {
               _id: product.id,
            },
         });

         if (status === 200 || status === 201) {
            dispatch({
               type: 'ADD_WISHLIST_ITEM',
               payload: product,
            });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      notify(`${product.name} Removing from the Wishlist`);
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `https://driftkart-backend.duhbhavesh.repl.co/wishlist/${product.id}`,
         });

         if (status === 200 || status === 201) {
            dispatch({
               type: 'REMOVE_WISHLIST_ITEM',
               payload: product,
            });
         }
      } catch (error) {
         console.log(error);
      }
   }
};

export const handleRemoveWishListItem = async ({
   state,
   dispatch,
   product,
   notify,
}) => {
   if (checkItem(state.wishList, product)) {
      notify(`${product.name} Removing from the Wishlist`);
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `https://driftkart-backend.duhbhavesh.repl.co/wishlist/${product.id}`,
         });

         if (status === 200 || status === 201) {
            dispatch({
               type: 'REMOVE_WISHLIST_ITEM',
               payload: product,
            });
         }
      } catch (error) {
         console.log(error);
      }
   }
};

export const handleMoveItemToCart = async ({
   state,
   dispatch,
   product,
   notify,
}) => {
   if (checkItem(state.cart, product).length === 0) {
      notify(`${product.name} Moving to the Cart`);
      try {
         const { status } = await axios({
            method: 'POST',
            url: `https://driftkart-backend.duhbhavesh.repl.co/cart`,
            data: {
               _id: product.id,
               quantity: 1,
            },
         });

         if (status === 200 || status === 201) {
            dispatch({ type: 'ADD_CART_ITEM', payload: product });
            handleRemoveWishListItem({ state, dispatch, product, notify });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      notify(`${product.name} Already present in the Cart`);
      handleRemoveWishListItem({ state, dispatch, product, notify });
   }
};

export const handleRemoveCartItem = async ({
   state,
   dispatch,
   product,
   notify,
}) => {
   if (checkItem(state.cart, product)) {
      notify(`${product.name} Removing from the Cart`);
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `https://driftkart-backend.duhbhavesh.repl.co/cart/${product.id}`,
            data: {
               _id: product.id,
            },
         });

         if (status === 200 || status === 201) {
            dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
         }
      } catch (error) {
         console.log(error);
      }
   }
};

export const handleMoveItemToWishlist = async ({
   state,
   dispatch,
   product,
   notify,
}) => {
   if (checkItem(state.wishList, product).length === 0) {
      notify(`${product.name} Moving to the Wishlist`);
      try {
         const { status } = await axios({
            method: 'POST',
            url: `https://driftkart-backend.duhbhavesh.repl.co/wishlist`,
            data: {
               _id: product.id,
            },
         });

         if (status === 200 || status === 201) {
            dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
            handleRemoveCartItem({ state, dispatch, product, notify });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      notify(`${product.name} Already present in the Wishlist`);
      handleRemoveCartItem({ state, dispatch, product, notify });
   }
};

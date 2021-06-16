import axios from 'axios';
import { checkItem, API_ENDPOINT } from '../utils/utils';

export const handleFetchProducts = async (dispatch) => {
   try {
      const {
         data: { products },
         status,
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/products`,
      });

      if (status === 200 || status === 201) {
         dispatch({ type: 'SET_PRODUCTS', payload: products });
      }
   } catch (error) {
      console.log(error);
   }
};

export const handleFetchCart = async (dispatch, token) => {
   try {
      const {
         data: { response },
         status,
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/cart`,
         headers: {
            Authorization: token,
         },
      });

      if (status === 200 || status === 201) {
         dispatch({ type: 'SET_USER_CART', payload: response });
      }
   } catch (error) {
      console.log(error);
   }
};

export const handleFetchWishlist = async (dispatch, token) => {
   try {
      const {
         data: { response },
         status,
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/wishlist`,
         headers: {
            Authorization: token,
         },
      });

      if (status === 200 || status === 201) {
         dispatch({ type: 'SET_USER_WISHLIST', payload: response });
      }
   } catch (error) {
      console.log(error);
   }
};

export const handleAddToCartItem = async ({
   state,
   dispatch,
   product,
   navigate,
   notify,
   token,
}) => {
   if (checkItem(state.cart, product).length === 0) {
      try {
         const { status } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/cart/${product.id}`,
            data: {
               _id: product.id,
               quantity: 1,
            },
            headers: {
               Authorization: token,
            },
         });
         if (status === 200 || status === 201) {
            notify(`${product.name} Adding to the Cart`);
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
   token,
}) => {
   if (checkItem(state.wishList, product).length === 0) {
      try {
         const { status } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/wishlist/${product.id}`,
            data: {
               _id: product.id,
            },
            headers: {
               Authorization: token,
            },
         });

         if (status === 200 || status === 201) {
            notify(`${product.name} Adding to the Wishlist`);
            dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/wishlist/${product.id}`,
            headers: {
               Authorization: token,
            },
         });

         if (status === 200 || status === 201) {
            notify(`${product.name} Removing from the Wishlist`);
            dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
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
   token,
}) => {
   if (checkItem(state.wishList, product)) {
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/wishlist/${product.id}`,
            headers: {
               Authorization: token,
            },
         });

         if (status === 200 || status === 201) {
            notify(`${product.name} Removing from the Wishlist`);
            dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
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
   token,
}) => {
   if (checkItem(state.cart, product).length === 0) {
      try {
         const { status } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/cart/${product.id}`,
            data: {
               _id: product.id,
               quantity: 1,
            },
            headers: {
               Authorization: token,
            },
         });

         if (status === 200 || status === 201) {
            notify(`${product.name} Moving to the Cart`);
            dispatch({ type: 'ADD_CART_ITEM', payload: product });
            handleRemoveWishListItem({
               state,
               dispatch,
               product,
               notify,
               token,
            });
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
   token,
}) => {
   if (checkItem(state.cart, product)) {
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/cart/${product.id}`,
            data: {
               _id: product.id,
            },
            headers: {
               Authorization: token,
            },
         });

         if (status === 200 || status === 201) {
            notify(`${product.name} Removing from the Cart`);
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
   token,
}) => {
   if (checkItem(state.wishList, product).length === 0) {
      try {
         const { status } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/wishlist/${product.id}`,
            data: {
               _id: product.id,
            },
            headers: {
               Authorization: token,
            },
         });

         if (status === 200 || status === 201) {
            notify(`${product.name} Moving to the Wishlist`);
            dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
            handleRemoveCartItem({
               state,
               dispatch,
               product,
               notify,
               token,
            });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      notify(`${product.name} Already present in the Wishlist`);
      handleRemoveCartItem({ state, dispatch, product, notify });
   }
};

export const handleUserSignup = async ({
   email,
   password,
   firstName,
   lastName,
}) => {
   try {
      const { status } = await axios({
         method: 'POST',
         url: `${API_ENDPOINT}/api/signup`,
         data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
         },
      });

      return { status };
   } catch (error) {
      console.log(error);
   }
};

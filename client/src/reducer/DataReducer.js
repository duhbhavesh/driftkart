import { initialState } from '../context/DataContext';

export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case 'SET_PRODUCTS':
         return { ...state, products: payload };

      case 'SET_USER_WISHLIST':
         return { ...state, wishList: payload };

      case 'SET_USER_CART':
         return { ...state, cart: payload };

      case 'ADD_CART_ITEM':
         return {
            ...state,
            cart: [...state.cart, { ...payload }],
         };

      case 'REMOVE_CART_ITEM':
         return {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id),
         };

      case 'INCREASE_QUANTITY':
         return {
            ...state,
            cart: state.cart.map((item) =>
               item.id === payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
            ),
         };

      case 'DECREASE_QUANTITY':
         return {
            ...state,
            cart: state.cart.map((item) =>
               item.id === payload.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
            ),
         };

      case 'ADD_WISHLIST_ITEM':
         return {
            ...state,
            wishList: [...state.wishList, { ...payload, quantity: 1 }],
         };

      case 'REMOVE_WISHLIST_ITEM':
         return {
            ...state,
            wishList: state.wishList.filter((item) => item.id !== payload.id),
         };

      case 'SORT':
         return { ...state, sortBy: payload };

      case 'TOGGLE_INVENTORY':
         return { ...state, showInventory: !state.showInventory };

      case 'TOGGLE_DELIVERY':
         return { ...state, showFastDelivery: !state.showFastDelivery };

      case 'SET_CATEGORY':
         return { ...state, categories: [...state.categories, payload] };

      case 'REMOVE_CATEGORY':
         return {
            ...state,
            categories: state.categories.filter(
               (category) => category !== payload,
            ),
         };

      case 'SET_RATING':
         return { ...state, ratings: [...state.ratings, payload] };

      case 'REMOVE_RATING':
         return {
            ...state,
            ratings: state.ratings.filter((rating) => rating !== payload),
         };

      case 'RESET_FILTERS':
         return initialState;

      default:
         break;
   }
};

export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case 'ADD_CART_ITEM':
         return {
            ...state,
            cart: [...state.cart, { ...payload, quantity: 1 }],
         };
      case 'REMOVE_CART_ITEM':
         return {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id),
         };
      case 'INC_QTY':
         return {
            ...state,
            cart: state.cart.map((item) =>
               item.id === payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
            ),
         };
      case 'DEC_QTY':
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
      default:
         break;
   }
};

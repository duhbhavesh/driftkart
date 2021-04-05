import { createContext, useContext, useReducer } from 'react';

export const DataContext = createContext();

const DataReducer = (state, { type, payload }) => {
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
      default:
         break;
   }
};

const products = [
   {
      id: 1,
      name: 'Watch',
      price: 1000,
      quantity: 0,
   },
   {
      id: 2,
      name: 'Earphone',
      price: 500,
      quantity: 0,
   },
   {
      id: 3,
      name: 'Brush',
      price: 50,
      quantity: 0,
   },
   {
      id: 4,
      name: 'Headphone',
      price: 10000,
      quantity: 0,
   },
];

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(DataReducer, {
      cart: [],
      wishList: [],
      products: products,
   });

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);

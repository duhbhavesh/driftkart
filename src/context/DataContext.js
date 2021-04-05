import { createContext, useContext, useReducer } from 'react';
import faker from 'faker';

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

const products = [...Array(50)].map((item) => ({
   id: faker.random.uuid(),
   name: faker.commerce.productName(),
   image: faker.random.image(),
   price: faker.commerce.price(),
   material: faker.commerce.productMaterial(),
   brand: faker.lorem.word(),
   inStock: faker.random.boolean(),
   fastDelivery: faker.random.boolean(),
   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
   offer: faker.random.arrayElement([
      'Save 50',
      '70% bonanza',
      'Republic Day Sale',
   ]),
   idealFor: faker.random.arrayElement([
      'Men',
      'Women',
      'Girl',
      'Boy',
      'Senior',
   ]),
   level: faker.random.arrayElement([
      'beginner',
      'amateur',
      'intermediate',
      'advanced',
      'professional',
   ]),
   color: faker.commerce.color(),
}));

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(DataReducer, {
      cart: [],
      wishList: [],
      products: products,
      sortBy: null,
      showInventory: true,
      showFastDelivery: false,
   });

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);

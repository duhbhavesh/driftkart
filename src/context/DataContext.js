import { createContext, useContext, useReducer } from 'react';
import faker from 'faker';
import { DataReducer } from './DataReducer';

export const DataContext = createContext();

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

const initialState = {
   cart: [],
   wishList: [],
   products: products,
   sortBy: null,
   showInventory: true,
   showFastDelivery: false,
};

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(DataReducer, initialState);

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);

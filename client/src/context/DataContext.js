import data from '../data';

import { createContext, useContext, useReducer } from 'react';
import { DataReducer } from './DataReducer';

export const DataContext = createContext();

const initialState = {
   cart: [],
   wishList: [],
   products: data,
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

import { createContext, useContext, useReducer } from 'react';
import { DataReducer } from '../reducer/DataReducer';

export const DataContext = createContext();

export const initialState = {
   products: [],
   wishList: [],
   cart: [],
   sortBy: null,
   showInventory: true,
   showFastDelivery: false,
   categories: [],
   ratings: [],
   addresses: [],
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
